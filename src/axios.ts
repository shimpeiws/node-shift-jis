import axios, { AxiosResponse } from "axios";
import qs from "qs";
import iconv from "iconv-lite";

async function main() {
  const apiBase = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=Shift-JIS"
    }
  });

  const testStringOriginal = "ああいい";
  const testString = iconv.encode(testStringOriginal, "windows-31j");
  const obj = {
    name: testStringOriginal,
    zipCode: "350-1130",
    mail: "sheenan+test4@tigerspike.com",
    code: "8000000000000068"
  };

  try {
    const strUTF8 = qs.stringify(obj);
    console.info("UTF-8", strUTF8);
    await apiBase.post("/", strUTF8);
    const strShiftJIS = qs.stringify({
      ...obj,
      name: testString
    });
    console.info("SHIFT-JIS", strShiftJIS);
    await apiBase.post("/", strShiftJIS);
  } catch (e) {
    console.info("e", e);
  }
}

main();
