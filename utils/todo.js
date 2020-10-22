function saveRecords(todoLists) {
  wx.setStorageSync("recordList", JSON.stringify(todoLists));
}

function fetchRecords(todoLists) {
  return JSON.parse(wx.getStorageSync("recordList") || "[]");
}

export { saveRecords, fetchRecords };
