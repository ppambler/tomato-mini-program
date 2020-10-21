let id = parseInt(wx.getStorageSync("_idMax") || "0");

function createId() {
  id++;
  wx.setStorageSync("_idMax", id.toString());
  return id;
}

export default createId;
