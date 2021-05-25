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

  const testString = "ああいい";
  // const testString = iconv.encode("ああいい", "windows-31j");
  const obj = {
    mobileAddress: "",
    memberSei: testString,
    memberMei: "",
    memberSeiKana: "",
    memberMeiKana: "",
    nickname: "",
    sexCode: "02",
    birthday: "",
    phone: "",
    mobilePhone: "",
    mobilePassword: "",
    pcPassword: "abc123123",
    zipCode: "350-1130",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    mobileMagazineFlag: "",
    pcMagazineFlag: "",
    pcAddress: "sheenan+test4@tigerspike.com",
    pcMailTypeCode: "",
    displayType: 0,
    applyDate: "",
    applyShopCode: "",
    rank: "RNK00010",
    freeTypeDetailNo1: "",
    freeTypeFlag1: "",
    freeType1: "",
    freeTypeDetailNo2: "",
    freeTypeFlag2: "",
    freeType2: "",
    freeTypeDetailNo3: "",
    freeTypeFlag3: "",
    freeType3: "",
    freeTypeDetailNo4: "",
    freeTypeFlag4: "",
    freeType4: "",
    freeTypeDetailNo5: "",
    freeTypeFlag5: "",
    freeType5: "",
    freeTypeDetailNo6: "",
    freeTypeFlag6: "",
    freeType6: "",
    freeTypeDetailNo7: "",
    freeTypeFlag7: "",
    freeType7: "",
    freeTypeDetailNo8: "",
    freeTypeFlag8: "",
    freeType8: "",
    freeTypeDetailNo9: "",
    freeTypeFlag9: "",
    freeType9: "",
    freeTypeDetailNo10: "",
    freeTypeFlag10: "",
    freeType10: "",
    BIKO1: "",
    BIKO2: "",
    BIKO3: "",
    BIKO4: "",
    BIKO5: "",
    BIKO6: "",
    BIKO7: "",
    BIKO8: "",
    BIKO9: "",
    BIKO10: "",
    mobileAutoLoginFlag: "",
    pcAutoLoginFlag: "",
    originalMemberId: "",
    updateCount: 32,
    memberCode: "8000000000000068"
  };
  const str = qs.stringify(obj);

  console.info("str", str);

  try {
    await apiBase.post("/", str);
  } catch (e) {
    console.info("e", e);
  }
}

main();
