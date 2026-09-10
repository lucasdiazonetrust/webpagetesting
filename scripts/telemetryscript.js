

function installCookie() {
	const expiryDate = new Date();
	expiryDate.setMonth(expiryDate.getMonth() + 1);
	document.cookie = "testingCookie_telemetry=22222; expires="+expiryDate.toUTCString()+"; path=/; SameSite=Lax";
	console.log("Cookie testingCookieTelemetry installed successfully!");
	alert("Cookie testingCookieTelemetry installed successfully!");
}

const EXPIRY_DATE = new Date('2026-12-31T23:59:59Z').getTime();


 /*LOCAL STORAGE*/

function getLocalStorage(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);

  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return "value: "+item.value +"\nname: " +key;
}

function setLocalStorage(key, value) {
  const item = {
    value,
    expiry: EXPIRY_DATE
  };
  localStorage.setItem(key, JSON.stringify(item));
  console.log(getLocalStorage('LocalStorage_telemetry'));
  alert("localStorage installed successfully!\n"+getLocalStorage('LocalStorage_telemetry'));
}



/*SESSION STORAGE*/

function getSessionStorage(key) {
  const itemStr = sessionStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);

  if (Date.now() > item.expiry) {
    sessionStorage.removeItem(key);
    return null;
  }

  return "value: "+item.value +"\nname: " +key;
}

function setSessionStorage(key, value) {
  const item = {
    value,
    expiry: EXPIRY_DATE
  };
  sessionStorage.setItem(key, JSON.stringify(item));
  console.log(getSessionStorage('SessionStorage_telemetry'));
  alert("sessionStorage installed successfully!\n"+getSessionStorage('SessionStorage_telemetry'));
}


