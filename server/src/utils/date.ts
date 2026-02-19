import { TimeStampType } from "@/types";

function getDate():string{
  const date = new Date();
  return date.toLocaleDateString();
}

function getCurrentTime():string{
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function getTimeStamp(): TimeStampType{
  return {
    date: getDate(),
    time: getCurrentTime()
  }
}
export {
  getDate,
  getCurrentTime,
  getTimeStamp
}
