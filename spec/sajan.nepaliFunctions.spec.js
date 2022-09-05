describe("sajan.nepaliFunctions", function () {
  var NepaliFunctions;
  beforeEach(function () {
    NepaliFunctions = require("../sajan.nepaliFunctions.min");
  });

  it("should parse date string", function () {
    var parsedDate = NepaliFunctions.ParseDate("2000-01-15");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 15 },
      parsedFormat: "YYYY-MM-DD",
    });

    var parsedDate = NepaliFunctions.ParseDate("2000/01/01");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 1 },
      parsedFormat: "YYYY/MM/DD",
    });

    var parsedDate = NepaliFunctions.ParseDate("01-01-2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 1 },
      parsedFormat: "DD-MM-YYYY",
    });

    var parsedDate = NepaliFunctions.ParseDate("02/01/2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 2 },
      parsedFormat: "DD/MM/YYYY",
    });

    var parsedDate = NepaliFunctions.ParseDate("15-01-2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 15 },
      parsedFormat: "DD-MM-YYYY",
    });

    var parsedDate = NepaliFunctions.ParseDate("15/01/2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 15 },
      parsedFormat: "DD/MM/YYYY",
    });

    var parsedDate = NepaliFunctions.ParseDate("01/15/2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 1, day: 15 },
      parsedFormat: "MM/DD/YYYY",
    });

    var parsedDate = NepaliFunctions.ParseDate("12/15/2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 12, day: 15 },
      parsedFormat: "MM/DD/YYYY",
    });

    var parsedDate = NepaliFunctions.ParseDate("15/12/2000");
    expect(parsedDate).toEqual({
      parsedDate: { year: 2000, month: 12, day: 15 },
      parsedFormat: "DD/MM/YYYY",
    });
  });

  it("should convert to date object", function () {
    var dateObject1 = NepaliFunctions.ConvertToDateObject(
      "2000-01-01",
      "YYYY-MM-DD"
    );
    expect(dateObject1).toEqual({ year: 2000, month: 1, day: 1 });

    var dateObject2 = NepaliFunctions.ConvertToDateObject(
      "2000/01/01",
      "YYYY/MM/DD"
    );
    expect(dateObject2).toEqual({ year: 2000, month: 1, day: 1 });

    var dateObject3 = NepaliFunctions.ConvertToDateObject(
      "01-01-2000",
      "MM-DD-YYYY"
    );
    expect(dateObject3).toEqual({ year: 2000, month: 1, day: 1 });

    var dateObject4 = NepaliFunctions.ConvertToDateObject(
      "01/01/2000",
      "MM/DD/YYYY"
    );
    expect(dateObject4).toEqual({ year: 2000, month: 1, day: 1 });
  });

  it("should convert to date format", function () {
    var dateString1 = NepaliFunctions.ConvertDateFormat(
      { year: 2000, month: 1, day: 1 },
      "YYYY-MM-DD"
    );
    expect(dateString1).toEqual("2000-01-01");

    var dateString1 = NepaliFunctions.ConvertDateFormat(
      { year: 2000, month: 1, day: 1 },
      "YYYY/MM/DD"
    );
    expect(dateString1).toEqual("2000/01/01");

    var dateString1 = NepaliFunctions.ConvertDateFormat(
      { year: 2000, month: 1, day: 1 },
      "MM-DD-YYYY"
    );
    expect(dateString1).toEqual("01-01-2000");

    var dateString1 = NepaliFunctions.ConvertDateFormat(
      { year: 2000, month: 1, day: 1 },
      "MM/DD/YYYY"
    );
    expect(dateString1).toEqual("01/01/2000");
  });

  it("should convert ad to bs", function () {
    var bsDate = NepaliFunctions.AD2BS({ year: 2001, month: 6, day: 1 });
    expect(bsDate).toEqual({ year: 2058, month: 2, day: 19 });

    var bsDate = NepaliFunctions.AD2BS({ year: 2008, month: 5, day: 28 });
    expect(bsDate).toEqual({ year: 2065, month: 2, day: 15 });

    var bsDate = NepaliFunctions.AD2BS("2008-05-28");
    expect(bsDate).toEqual("2065-02-15");

    var bsDate = NepaliFunctions.AD2BS("2008-05-28", "YYYY-MM-DD");
    expect(bsDate).toEqual("2065-02-15");

    var bsDate = NepaliFunctions.AD2BS(
      "2008-05-28",
      "YYYY-MM-DD",
      "MM/DD/YYYY"
    );
    expect(bsDate).toEqual("02/15/2065");
  });

  it("should convert bs to ad", function () {
    var adDate = NepaliFunctions.BS2AD({ year: 2058, month: 2, day: 19 });
    expect(adDate).toEqual({ year: 2001, month: 6, day: 1 });

    var adDate = NepaliFunctions.BS2AD({ year: 2065, month: 2, day: 15 });
    expect(adDate).toEqual({ year: 2008, month: 5, day: 28 });

    var adDate = NepaliFunctions.BS2AD("2065-02-15");
    expect(adDate).toEqual("2008-05-28");

    var adDate = NepaliFunctions.BS2AD("2065-02-15", "YYYY-MM-DD");
    expect(adDate).toEqual("2008-05-28");

    var adDate = NepaliFunctions.BS2AD(
      "2065-02-15",
      "YYYY-MM-DD",
      "MM/DD/YYYY"
    );
    expect(adDate).toEqual("05/28/2008");
  });

  it("should validate bs date", function () {
    var isBsDate = NepaliFunctions.ValidateBsDate({
      year: 2000,
      month: 2,
      day: 30,
    });
    expect(isBsDate).toEqual(true);

    var isBsDate = NepaliFunctions.ValidateBsDate({
      year: 2064,
      month: 4,
      day: 32,
    });
    expect(isBsDate).toEqual(true);

    var isBsDate = NepaliFunctions.ValidateBsDate({
      year: 2000,
      month: 13,
      day: 30,
    });
    expect(isBsDate).toEqual(false);

    var isBsDate = NepaliFunctions.ValidateBsDate({
      year: 2000,
      month: 12,
      day: 32,
    });
    expect(isBsDate).toEqual(false);

    var isBsDate = NepaliFunctions.ValidateBsDate("2078-01-05");
    expect(isBsDate).toEqual(true);

    var isBsDate = NepaliFunctions.ValidateBsDate("2078-01-32");
    expect(isBsDate).toEqual(false);

    var isBsDate = NepaliFunctions.ValidateBsDate("2078/01/30");
    expect(isBsDate).toEqual(false);

    var isBsDate = NepaliFunctions.ValidateBsDate("2078/01/30", "YYYY/MM/DD");
    expect(isBsDate).toEqual(true);
  });

  it("should return current AD date", function () {
    var adDate = NepaliFunctions.GetCurrentAdDate();
    expect(typeof adDate).toEqual("object");

    var adDate = NepaliFunctions.GetCurrentAdDate("YYYY-MM-DD");
    expect(typeof adDate).toEqual("string");
  });

  it("should return current BS date", function () {
    var bsDate = NepaliFunctions.GetCurrentBsDate();
    expect(typeof bsDate).toEqual("object");

    var bsDate = NepaliFunctions.GetCurrentBsDate("YYYY-MM-DD");
    expect(typeof bsDate).toEqual("string");
  });

  it("should return Ad months", function () {
    var adMonths = NepaliFunctions.GetAdMonths();
    expect(adMonths).toEqual([
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]);
  });

  it("should return Ad month", function () {
    var adMonth = NepaliFunctions.GetAdMonth(0);
    expect(adMonth).toEqual("January");

    var adMonth = NepaliFunctions.GetAdMonth(5);
    expect(adMonth).toEqual("June");

    var adMonth = NepaliFunctions.GetAdMonth(11);
    expect(adMonth).toEqual("December");

    var adMonth = NepaliFunctions.GetAdMonth(-1);
    expect(adMonth).toEqual(null);

    var adMonth = NepaliFunctions.GetAdMonth(12);
    expect(adMonth).toEqual(null);
  });

  it("should return Bs months", function () {
    var bsMonths = NepaliFunctions.GetBsMonths();
    expect(bsMonths).toEqual([
      "Baisakh",
      "Jestha",
      "Ashar",
      "Shrawan",
      "Bhadra",
      "Ashoj",
      "Kartik",
      "Mangsir",
      "Poush",
      "Magh",
      "Falgun",
      "Chaitra",
    ]);
  });

  it("should return Bs month", function () {
    var bsMonth = NepaliFunctions.GetBsMonth(0);
    expect(bsMonth).toEqual("Baisakh");

    var bsMonth = NepaliFunctions.GetBsMonth(5);
    expect(bsMonth).toEqual("Ashoj");

    var bsMonth = NepaliFunctions.GetBsMonth(11);
    expect(bsMonth).toEqual("Chaitra");

    var bsMonth = NepaliFunctions.GetBsMonth(-1);
    expect(bsMonth).toEqual(null);

    var bsMonth = NepaliFunctions.GetBsMonth(12);
    expect(bsMonth).toEqual(null);
  });

  it("should return the BS months in unicode", function () {
    var bsMonths = NepaliFunctions.GetBsMonthsInUnicode();
    expect(bsMonths).toEqual([
      "बैशाख",
      "जेठ",
      "अषाढ",
      "श्रावण",
      "भाद्र",
      "आश्विन",
      "कार्तिक",
      "मङ्सिर",
      "पौष",
      "माघ",
      "फाल्गुन",
      "चैत्र",
    ]);
  });

  it("should return Bs month in unicode", function () {
    var bsMonth = NepaliFunctions.GetBsMonthInUnicode(0);
    expect(bsMonth).toEqual("बैशाख");

    var bsMonth = NepaliFunctions.GetBsMonthInUnicode(5);
    expect(bsMonth).toEqual("आश्विन");

    var bsMonth = NepaliFunctions.GetBsMonthInUnicode(11);
    expect(bsMonth).toEqual("चैत्र");

    var bsMonth = NepaliFunctions.GetBsMonthInUnicode(-1);
    expect(bsMonth).toEqual(null);

    var bsMonth = NepaliFunctions.GetBsMonthInUnicode(12);
    expect(bsMonth).toEqual(null);
  });

  it("should return the BS days in unicode", function () {
    var bsMonths = NepaliFunctions.GetBsDaysUnicode();
    expect(bsMonths).toEqual([
      "आइतवार",
      "सोमवार",
      "मङ्गलवार",
      "बुधवार",
      "बिहिवार",
      "शुक्रवार",
      "शनिवार",
    ]);
  });

  it("should return Bs day in unicode", function () {
    var bsMonth = NepaliFunctions.GetBsDayUnicode(0);
    expect(bsMonth).toEqual("आइतवार");

    var bsMonth = NepaliFunctions.GetBsDayUnicode(4);
    expect(bsMonth).toEqual("बिहिवार");

    var bsMonth = NepaliFunctions.GetBsDayUnicode(7);
    expect(bsMonth).toEqual(null);
  });

  it("should return the BS days in unicode short", function () {
    var bsMonths = NepaliFunctions.GetBsDaysUnicodeShort();
    expect(bsMonths).toEqual(["आ", "सो", "मं", "बु", "बि", "शु", "श"]);
  });

  it("should return Bs day in unicode short", function () {
    var bsMonth = NepaliFunctions.GetBsDayUnicodeShort(0);
    expect(bsMonth).toEqual("आ");

    var bsMonth = NepaliFunctions.GetBsDayUnicodeShort(4);
    expect(bsMonth).toEqual("बि");

    var bsMonth = NepaliFunctions.GetBsDayUnicodeShort(7);
    expect(bsMonth).toEqual(null);
  });

  it("should return the Ad days", function () {
    var adDays = NepaliFunctions.GetAdDays();
    expect(adDays).toEqual([
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]);
  });

  it("should return Ad day", function () {
    var adDay = NepaliFunctions.GetAdDay(0);
    expect(adDay).toEqual("Sunday");

    var adDay = NepaliFunctions.GetAdDay(5);
    expect(adDay).toEqual("Friday");

    var adDay = NepaliFunctions.GetAdDay(7);
    expect(adDay).toEqual(null);
  });

  it("should return the Ad days short", function () {
    var adDays = NepaliFunctions.GetAdDaysShort();
    expect(adDays).toEqual(["S", "M", "T", "W", "T", "F", "S"]);
  });

  it("should return Ad day", function () {
    var adDay = NepaliFunctions.GetAdDayShort(0);
    expect(adDay).toEqual("S");

    var adDay = NepaliFunctions.GetAdDayShort(5);
    expect(adDay).toEqual("F");

    var adDay = NepaliFunctions.GetAdDayShort(7);
    expect(adDay).toEqual(null);
  });

  it("should return full Bs date", function () {
    var bsDate = NepaliFunctions.GetBsFullDate(
      { year: 2075, month: 3, day: 15 },
      false
    );
    expect(bsDate).toEqual("15 Ashar 2075");

    var bsDate = NepaliFunctions.GetBsFullDate(
      { year: 2075, month: 5, day: 2 },
      false
    );
    expect(bsDate).toEqual("2 Bhadra 2075");

    var bsDate = NepaliFunctions.GetBsFullDate("2075-03-15", false);
    expect(bsDate).toEqual("15 Ashar 2075");

    var bsDate = NepaliFunctions.GetBsFullDate(
      "2075-03-15",
      false,
      "YYYY-MM-DD"
    );
    expect(bsDate).toEqual("15 Ashar 2075");

    var bsDate = NepaliFunctions.GetBsFullDate(
      "2075/03/15",
      false,
      "YYYY/MM/DD"
    );
    expect(bsDate).toEqual("15 Ashar 2075");

    var bsDate = NepaliFunctions.GetBsFullDate(
      "2075-03-15",
      false,
      "YYYY/MM/DD"
    );
    expect(bsDate).toEqual(null);

    var bsDate = NepaliFunctions.GetBsFullDate(
      { year: 2075, month: 3, day: 15 },
      true
    );
    expect(bsDate).toEqual("१५ अषाढ २०७५");

    var bsDate = NepaliFunctions.GetBsFullDate(
      { year: 2075, month: 5, day: 2 },
      true
    );
    expect(bsDate).toEqual("२ भाद्र २०७५");

    var bsDate = NepaliFunctions.GetBsFullDate("2075-05-02", true);
    expect(bsDate).toEqual("२ भाद्र २०७५");

    var bsDate = NepaliFunctions.GetBsFullDate("2075/05/02", true);
    expect(bsDate).toEqual(null);

    var bsDate = NepaliFunctions.GetBsFullDate(
      "2075/05/02",
      true,
      "YYYY/MM/DD"
    );
    expect(bsDate).toEqual("२ भाद्र २०७५");
  });

  it("should return full Ad date", function () {
    var adDate = NepaliFunctions.GetAdFullDate({
      year: 2001,
      month: 3,
      day: 15,
    });
    expect(adDate).toEqual("15 March 2001");

    var adDate = NepaliFunctions.GetAdFullDate({
      year: 2003,
      month: 5,
      day: 2,
    });
    expect(adDate).toEqual("2 May 2003");

    var adDate = NepaliFunctions.GetAdFullDate("2003-05-02");
    expect(adDate).toEqual("2 May 2003");

    var adDate = NepaliFunctions.GetAdFullDate("2003/05/02");
    expect(adDate).toEqual(null);

    var adDate = NepaliFunctions.GetAdFullDate("2003/05/02", "YYYY/MM/DD");
    expect(adDate).toEqual("2 May 2003");
  });

  it("should return full Bs day", function () {
    var bsDay = NepaliFunctions.GetBsFullDay({ year: 2045, month: 3, day: 15 });
    expect(bsDay).toEqual("Wednesday");

    var bsDay = NepaliFunctions.GetBsFullDay({ year: 2077, month: 5, day: 2 });
    expect(bsDay).toEqual("Tuesday");
  });

  it("should return full Bs day in unicode", function () {
    var bsDay = NepaliFunctions.GetBsFullDayInUnicode({
      year: 2045,
      month: 3,
      day: 15,
    });
    expect(bsDay).toEqual("बुधवार");

    var bsDay = NepaliFunctions.GetBsFullDayInUnicode({
      year: 2077,
      month: 5,
      day: 2,
    });
    expect(bsDay).toEqual("मङ्गलवार");
  });

  it("should return full Ad day", function () {
    var adDay = NepaliFunctions.GetAdFullDay({
      year: 2001,
      month: 3,
      day: 15,
    });
    expect(adDay).toEqual("Thursday");

    var adDay = NepaliFunctions.GetAdFullDay({
      year: 2003,
      month: 5,
      day: 2,
    });
    expect(adDay).toEqual("Friday");

    var adDay = NepaliFunctions.GetAdFullDay("2001-03-15");
    expect(adDay).toEqual("Thursday");

    var adDay = NepaliFunctions.GetAdFullDay("2003-05-02", "YYYY-MM-DD");
    expect(adDay).toEqual("Friday");

    var adDay = NepaliFunctions.GetAdFullDay("2003/05/02", "YYYY/MM/DD");
    expect(adDay).toEqual("Friday");
  });

  it("should return full Bs day", function () {
    var adDay = NepaliFunctions.GetBsFullDay({ year: 2045, month: 3, day: 15 });
    expect(adDay).toEqual("Wednesday");

    var adDay = NepaliFunctions.GetBsFullDay({ year: 2077, month: 5, day: 2 });
    expect(adDay).toEqual("Tuesday");

    var adDay = NepaliFunctions.GetBsFullDay("2045-03-15");
    expect(adDay).toEqual("Wednesday");

    var adDay = NepaliFunctions.GetBsFullDay("2077-05-02", "YYYY-MM-DD");
    expect(adDay).toEqual("Tuesday");

    var adDay = NepaliFunctions.GetBsFullDay("2077/05/02", "YYYY/MM/DD");
    expect(adDay).toEqual("Tuesday");
  });

  it("should return full Bs day in unicode", function () {
    var adDay = NepaliFunctions.GetBsFullDayInUnicode({
      year: 2045,
      month: 3,
      day: 15,
    });
    expect(adDay).toEqual("बुधवार");

    var adDay = NepaliFunctions.GetBsFullDayInUnicode({
      year: 2077,
      month: 5,
      day: 2,
    });
    expect(adDay).toEqual("मङ्गलवार");

    var adDay = NepaliFunctions.GetBsFullDayInUnicode("2045-03-15");
    expect(adDay).toEqual("बुधवार");

    var adDay = NepaliFunctions.GetBsFullDayInUnicode(
      "2077-05-02",
      "YYYY-MM-DD"
    );
    expect(adDay).toEqual("मङ्गलवार");

    var adDay = NepaliFunctions.GetBsFullDayInUnicode(
      "2077/05/02",
      "YYYY/MM/DD"
    );
    expect(adDay).toEqual("मङ्गलवार");
  });

  it("should add days to bs date", function () {
    var bsDate = NepaliFunctions.BsAddDays(
      { year: 2001, month: 3, day: 15 },
      2
    );
    expect(bsDate).toEqual({ year: 2001, month: 3, day: 17 });

    var bsDate = NepaliFunctions.BsAddDays(
      { year: 2003, month: 5, day: 2 },
      90
    );
    expect(bsDate).toEqual({ year: 2003, month: 8, day: 1 });

    var bsDate = NepaliFunctions.BsAddDays("2001-03-15", 2);
    expect(bsDate).toEqual("2001-03-17");

    var bsDate = NepaliFunctions.BsAddDays("2003/05/02", 90, "YYYY/MM/DD");
    expect(bsDate).toEqual("2003/08/01");
  });

  it("should return number of days between two Ad date objects", function () {
    var diff = NepaliFunctions.AdDatesDiff(
      { year: 2001, month: 3, day: 15 },
      { year: 2001, month: 3, day: 17 }
    );
    expect(diff).toEqual(2);

    var diff = NepaliFunctions.AdDatesDiff(
      { year: 2003, month: 5, day: 2 },
      { year: 2003, month: 8, day: 1 }
    );
    expect(diff).toEqual(91);

    var diff = NepaliFunctions.AdDatesDiff("2001-03-15", "2001-03-17");
    expect(diff).toEqual(2);

    var diff = NepaliFunctions.AdDatesDiff(
      "2003/05/02",
      "2003/08/01",
      "YYYY/MM/DD"
    );
    expect(diff).toEqual(91);
  });

  it("should return number of days between two Bs date objects", function () {
    var diff = NepaliFunctions.BsDatesDiff(
      { year: 2001, month: 3, day: 15 },
      { year: 2001, month: 3, day: 17 }
    );
    expect(diff).toEqual(2);

    var diff = NepaliFunctions.BsDatesDiff(
      { year: 2003, month: 5, day: 2 },
      { year: 2003, month: 8, day: 1 }
    );
    expect(diff).toEqual(90);

    var diff = NepaliFunctions.BsDatesDiff("2001-03-15", "2001-03-17");
    expect(diff).toEqual(2);

    var diff = NepaliFunctions.BsDatesDiff(
      "2003/05/02",
      "2003/08/01",
      "YYYY/MM/DD"
    );
    expect(diff).toEqual(90);
  });

  it("should return the number of days in the give Ad year month", function () {
    var days = NepaliFunctions.GetDaysInAdMonth(2015, 2);
    expect(days).toEqual(28);

    var days = NepaliFunctions.GetDaysInAdMonth(2020, 1);
    expect(days).toEqual(31);
  });

  it("shuould return the number of days in the given Bs year month", function () {
    var days = NepaliFunctions.GetDaysInBsMonth(2015, 2);
    expect(days).toEqual(32);

    var days = NepaliFunctions.GetDaysInBsMonth(2020, 1);
    expect(days).toEqual(31);
  });

  it("should convert number to unicode", function () {
    var str = NepaliFunctions.ConvertToUnicode(123456789);
    expect(str).toEqual("१२३४५६७८९");

    var str = NepaliFunctions.ConvertToUnicode(123.5);
    expect(str).toEqual("१२३.५");
  });

  it("should convert unicode to number", function () {
    var num = NepaliFunctions.ConvertToNumber("१२३४५६७८९");
    expect(num).toEqual(123456789);

    var num = NepaliFunctions.ConvertToNumber("१२३.५");
    expect(num).toEqual(123.5);

    var num = NepaliFunctions.ConvertToNumber("१२३.५A");
    expect(num).toEqual(123.5);
  });

  it("should return number in words", function () {
    var words = NepaliFunctions.NumberToWords(123456000.12, true);
    expect(words).toEqual(
      "Twelve Crore Thirty Four Lakh Fifty Six Thousand Rupees and Twelve Paisa"
    );

    var words = NepaliFunctions.NumberToWords(12, true);
    expect(words).toEqual("Twelve Rupees");

    var words = NepaliFunctions.NumberToWords(123456000.12, false);
    expect(words).toEqual("Twelve Crore Thirty Four Lakh Fifty Six Thousand");

    var words = NepaliFunctions.NumberToWords(12, false);
    expect(words).toEqual("Twelve");
  });

  it("should return number in words in unicode", function () {
    var words = NepaliFunctions.NumberToWordsUnicode(123456000.12, true);
    expect(words).toEqual("बाह्र करोड चौतीस लाख छपन्न हजार रुपैंया बाह्र पैसा");

    var words = NepaliFunctions.NumberToWordsUnicode(12, true);
    expect(words).toEqual("बाह्र रुपैंया");

    var words = NepaliFunctions.NumberToWordsUnicode(123456000.12, false);
    expect(words).toEqual("बाह्र करोड चौतीस लाख छपन्न हजार");

    var words = NepaliFunctions.NumberToWordsUnicode(12, false);
    expect(words).toEqual("बाह्र");
  });

  it("should return true if date is greater", function () {
    var isGreater = NepaliFunctions.CompareBsDates(
      { year: 2076, month: 2, day: 1 },
      { year: 2076, month: 1, day: 1 }
    );
    expect(isGreater).toEqual(true);

    var isGreater = NepaliFunctions.CompareBsDates(
      { year: 2076, month: 2, day: 1 },
      { year: 2076, month: 3, day: 1 }
    );
    expect(isGreater).toEqual(false);

    var isGreater = NepaliFunctions.CompareBsDates("2076-02-01", "2076-01-01");
    expect(isGreater).toEqual(true);

    var isGreater = NepaliFunctions.CompareBsDates(
      "2076/02/01",
      "2076/03/01",
      "YYYY/MM/DD"
    );
    expect(isGreater).toEqual(false);
  });

  it("should return if checkdate is between startDate and endDate", function () {
    var isBetween = NepaliFunctions.BetweenBsDates(
      { year: 2076, month: 2, day: 5 },
      { year: 2076, month: 1, day: 1 },
      { year: 2076, month: 2, day: 10 }
    );
    expect(isBetween).toEqual(true);

    var isBetween = NepaliFunctions.BetweenBsDates(
      { year: 2076, month: 1, day: 1 },
      { year: 2076, month: 1, day: 5 },
      { year: 2076, month: 2, day: 10 }
    );
    expect(isBetween).toEqual(false);

    var isBetween = NepaliFunctions.BetweenBsDates(
      "2076-02-05",
      "2076-01-01",
      "2076-02-10"
    );
    expect(isBetween).toEqual(true);

    var isBetween = NepaliFunctions.BetweenBsDates(
      "2076/01/01",
      "2076/01/05",
      "2076/02/10",
      "YYYY/MM/DD"
    );
    expect(isBetween).toEqual(false);
  });
});
