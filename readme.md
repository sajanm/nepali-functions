NepaliFunctions v1.3.1
======================

![Screenshot](https://github.com/sajanm/nepali-functions/blob/master/bg.jpg)

Summary
-------

NepaliFunctions is a javascript utility aimed at easing basic nepali functionalities. The utility provides a list of functionalities that are mostly used in nepali websites and applications.

Documentation
-------------

The link for the documentation is provided below:

[Documentation](http://nepalifunctions.sajanmaharjan.com.np/documentation/index.html)

Installation
------------

Download 
[zip](https://github.com/sajanm/nepali-functions/archive/master.zip)

The archive contains the core library and a demo of all the functions.

1.  Unpack the archive
2.  Include the script nepaliFunctions.min.js in your page
3.  Start using the functions

Usage
-----

Include the nepaliFunctions.min.js in your application, then you are done.
```html
<script src="nepaliFunctions.min.js" type="text/javascript" charset="utf-8"></script>
```

Rules of the thumb
------------------

While making use of the date functions, we are looking to create a simple date object: 
```js
{year: 2000, month: 1, day: 1}
```
**Acceptable date formats:**

"MM/DD/YYYY", "MM-DD-YYYY", "YYYY-MM-DD", "YYYY/MM/DD"

If we have a date string in any of the given format, the date can be converted to the date object using the function NepaliFunctions.ConvertToDateObject(dateString, format).
```js
NepaliFunctions.ConvertToDateObject("2000-01-01", "YYYY-MM-DD")
// returns { year: 2000, month: 1, day: 1}

NepaliFunctions.ConvertToDateObject("2000/01/01", "YYYY/MM/DD")
// returns { year: 2000, month: 1, day: 1}

NepaliFunctions.ConvertToDateObject("01-01-2000", "MM-DD-YYYY")
// returns { year: 2000, month: 1, day: 1}

NepaliFunctions.ConvertToDateObject("01/01/2000", "MM/DD/YYYY")
// returns { year: 2000, month: 1, day: 1}
```

Once the object is created, we can make use of all the date related functions.

**Conversion back to string**

Once we have manipulated the date object according to our need, we can convert back the date object to string using ConvertDateFormat(dateObj: string, returnFormat: string)

```js
NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "YYYY-MM-DD")
// Returns "2001-01-01"

NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "YYYY/MM/DD")
// Returns "2001/01/01"

NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "MM-DD-YYYY")
// Returns "01-01-2001"

NepaliFunctions.ConvertDateFormat({year: 2000, month: 1, day: 1}, "MM/DD/YYYY")
// Returns "01/01/2001"
```

**Date Related Functions**

*   ConvertToDateObject: Convert date string to object
*   ConvertDateFormat: Convert date object to string
*   AD2BS: Convert AD to BS
*   BS2AD: Convert BS to AD
*   ValidateBsDate: Validate if the given BS date is valid
*   GetCurrentAdDate: Gets the Current AD Date
*   GetCurrentAdYear: Gets the Current AD Year
*   GetCurrentAdMonth: Gets the Current AD Month
*   GetCurrentAdDay: Gets the Current AD Day
*   GetCurrentBsDate: Gets the Current BS Date
*   GetCurrentBsYear: Gets the Current BS Year
*   GetCurrentBsMonth: Get the Current BS Month
*   GetCurrentBsDay: Gets the Current BS Day
*   GetAdMonths: Get AD Month List
*   GetAdMonth: Get AD Month
*   GetBsMonths: Get BS Month List
*   GetBsMonth: Get BS Month
*   GetBsDays: Get BS Day List
*   GetBsDay: Get BS Day
*   GetBsDaysUnicodeShort: Get BS Day List in Short
*   GetAdDays: Get AD Day List
*   GetAdDay: Get AD Day
*   GetBsMonthsInUnicode: Get BS Month List In Nepali
*   GetBsMonthInUnicode: Get BS Month In Nepali
*   GetDaysInAdMonth: Get Days in the given AD Month
*   GetDaysInBsMonth: Get Days in the given BS Month
*   AdDatesDiff: Difference between two AD dates
*   BsDatesDiff: Difference between two BS dates
*   BsAddDays: Add days to given BS date
*   GetBsFullDate: Get full BS date
*   GetAdFullDate: Get full AD date
*   GetAdFullDay: Get Full AD day
*   GetBsFullDay: Get Full BS day
*   GetBsFullDayInUnicode: Get Full BS day in Unicode

**Other functions**

*   ConvertToUnicode(number: number)
```js
NepaliFunctions.ConvertToUnicode(123456789)
// Returns १२३४५६७८९
```
*   ConvertToNumber(unicode: string)
```js
NepaliFunctions.ConvertToNumber("१२३४५६७८९")
// Returns 123456789
```
*   NumberToWords(number: number, isCurrency: boolean)
```js
NepaliFunctions.NumberToWords(123456000.12, true)
// Returns Twelve Crore Thirty Four Lakh Fifty Six Thousand Rupees and Twelve Paisa
```
*   NumberToWordsUnicode(number: number, isCurrency: boolean)
```js
NepaliFunctions.NumberToWordsUnicode(123456000.12, true)
// Returns बाह्र करोड चौतीस लाख छपन्न हजार रुपैंया, बाह्र पैसा
```