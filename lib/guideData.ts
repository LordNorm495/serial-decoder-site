import type { BrandKey } from './decoders'
export interface Guide { title:string; format:string; example:string; meaning:string; scope:string; pitfalls:string[]; sources:{title:string;url:string}[] }
export const guides:Record<string,Guide> = {
  "carrier": {
    "title": "Carrier / Bryant / Payne: week before year",
    "format": "WWYY + factory + five sequence digits",
    "example": "0512C12345",
    "meaning": "Week 5 of 2012; C identifies the factory.",
    "scope": "The documented ten-character layout is supported. Earlier letter-based schemes and other product lines require their own model documentation.",
    "pitfalls": [
      "Read the first four characters before interpreting any letters. A plant letter does not encode the year in this format.",
      "Compare the outdoor and indoor labels separately; a replacement condenser does not date the furnace.",
      "Fiscal production weeks do not identify an exact calendar day. Do not convert them into a precise installation date."
    ],
    "sources": [
      {
        "title": "Carrier 38AU serial nomenclature, figure 2",
        "url": "https://www.shareddocs.com/hvac/docs/1009/Public/01/38AU-12SI.pdf"
      },
      {
        "title": "Carrier/Bryant service manual: unit identification",
        "url": "https://www.shareddocs.com/hvac/docs/1009/Public/0F/SM180CNV-280ANV-01.pdf"
      },
      {
        "title": "Carrier warranty lookup",
        "url": "https://www.carrier.com/us/en/residential/your-carrier-product/warranty/"
      }
    ]
  },
  "goodman": {
    "title": "Goodman / Amana HVAC / Daikin: year and month",
    "format": "YYMM + six sequence digits",
    "example": "1306123456",
    "meaning": "June 2013, not week 6.",
    "scope": "This rule is limited to ten-digit numeric HVAC serials. It does not apply to Amana kitchen/laundry appliances or every Daikin product worldwide.",
    "pitfalls": [
      "A month over 12 is a mismatch, not permission to reinterpret the code as a week.",
      "Use the whole equipment label, not the serial on an individual motor or compressor.",
      "Two-digit year estimates use 1980\u20132079; unusually old equipment needs direct confirmation."
    ],
    "sources": [
      {
        "title": "Goodman limited warranty date-code explanation",
        "url": "https://apps.goodmanmfg.com/brochures/files/55f9bce7bd52bPW-CFURNU.pdf"
      },
      {
        "title": "Daikin furnace warranty date-code explanation",
        "url": "https://backend.daikincomfort.com/docs/default-source/product-documents/residential/warranty/pwdfurntwlza.pdf"
      }
    ]
  },
  "lennox": {
    "title": "Lennox: plant, year, then month letter",
    "format": "Two plant digits + YY + month letter + five sequence digits",
    "example": "5820F12345",
    "meaning": "Plant 58, year 2020, F = June. This is an illustrative example.",
    "scope": "The tool supports the numeric plant-code layout shown in Lennox nomenclature. A serial from another era or product family may not follow this sequence.",
    "pitfalls": [
      "The third and fourth characters give the year; starting at the fourth character shifts the date.",
      "The fifth character is a month letter. I is omitted; J is September.",
      "Retain the model suffix when asking Lennox about parts; a manufacturing date alone is not a parts identifier."
    ],
    "sources": [
      {
        "title": "Lennox model and serial nomenclature",
        "url": "https://www.lennox.com/lib/legacy-res/pdfs/lennox_model_and_serial_nomenclature.pdf"
      }
    ]
  },
  "icp": {
    "title": "ICP brands: keep the year and week together",
    "format": "Factory letter + YYWW + five sequence digits",
    "example": "V102212345",
    "meaning": "Year 2010, week 22.",
    "scope": "For matching ten-character ICP formats used by Heil, Comfortmaker, Tempstar and Keeprite. Confirm the product manual; a shared brand group is not proof that every unit uses this format.",
    "pitfalls": [
      "ICP and York are separate date-code systems. Do not apply a York letter chart.",
      "The first letter is a factory identifier; the next four digits carry the date.",
      "Ductless, replacement components and legacy units may differ. Keep the complete model when escalating a mismatch."
    ],
    "sources": [
      {
        "title": "ICP service manual: serial nomenclature, page 16",
        "url": "https://www.shareddocs.com/hvac/docs/1011/Public/02/42108920401_ICP_27039.pdf"
      }
    ]
  },
  "rheem": {
    "title": "Rheem / Ruud HVAC: week before year",
    "format": "One or two prefix letters + WWYY + five sequence digits",
    "example": "TM159799999",
    "meaning": "Week 15 of 1997.",
    "scope": "The automatic tool handles the simple prefix layout. Rheem also places date blocks inside longer serials. Water-heater serials are not decoded with this HVAC rule.",
    "pitfalls": [
      "Read week then year after the relevant factory letter, not year then week.",
      "For a long serial with several letters, use its model-specific nomenclature to identify the date block.",
      "Keep the leading letters and zeros when sending a photo or requesting warranty confirmation."
    ],
    "sources": [
      {
        "title": "Rheem: preparing for an HVAC contractor",
        "url": "https://www.rheem.com/air-conditioning/articles/what-to-know-before-meeting-with-an-hvac-contractor/"
      },
      {
        "title": "Rheem air-handler serial explanation, page 4",
        "url": "https://pts.myrheem.com/docstore/webdocs/ServiceDocs/histlib/pdfs/Parts/Air_Handler/BHB_CGHJ.pdf"
      }
    ]
  },
  "ge": {
    "title": "GE Appliances / US Hotpoint: repeating year letters",
    "format": "Month letter + year letter + six digits, sometimes a final letter",
    "example": "GA123456A",
    "meaning": "G = April; A can mean 2025, 2013, 2001 or older cycles. The model is needed to choose.",
    "scope": "Uses the GE Appliances US date chart. Hotpoint products in other markets may be made by another company. The tool lists possible years instead of claiming the newest one is correct.",
    "pitfalls": [
      "The date is in the first two letters, not the second and third characters.",
      "Month letters are A D F G H L M R S T V Z, not a simple alphabetical sequence.",
      "Use a receipt, model-specific manual or GE support to resolve repeated year codes. A manual print date is supporting context, not the exact build date."
    ],
    "sources": [
      {
        "title": "GE Appliances official manufacture-date chart",
        "url": "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16195"
      },
      {
        "title": "GE model and serial label locator",
        "url": "https://www.geappliances.com/ge/find-model-serial-number/"
      }
    ]
  },
  "lg": {
    "title": "LG: month is clear, decade needs evidence",
    "format": "Year digit + two-digit month + remaining identifier",
    "example": "503AB12345",
    "meaning": "March in a year ending in 5; the decade is not encoded in that digit. Illustrative example.",
    "scope": "Applies to LG appliance serials beginning with three numeric date characters. The result lists possible decades from 1990 onward; these candidates do not prove that a particular model existed in each year.",
    "pitfalls": [
      "The first character is the year digit, not the second.",
      "Never pick a decade solely because it makes the appliance look newer.",
      "An outdoor HVAC unit and a household appliance can share a date pattern without sharing warranty terms."
    ],
    "sources": [
      {
        "title": "LG USA model and serial-number guide",
        "url": "https://www.lg.com/us/support/help-library/how-to-find-my-lg-model-and-serial-number-CT00000317-20152254906058"
      }
    ]
  },
  "whirlpool": {
    "title": "Whirlpool / Maytag: the model decides the format",
    "format": "Selected models: plant + year digit + two-digit week + five sequence digits",
    "example": "M82510000",
    "meaning": "M dryer example: week 25, year ending in 8. The cited 2019 manual identifies its example as 2018.",
    "scope": "Automatic estimates are restricted to the M dryer, D wall-oven and TF all-in-one numeric-year patterns documented below. Letter-year codes, refrigerators, older Maytag products and other factories need model-specific documentation.",
    "pitfalls": [
      "Do not use a universal month-letter chart: the documented examples use a numeric production week.",
      "One plant character and two plant characters shift the date positions. TF is a two-letter plant prefix.",
      "A manual establishes the intended model family. A matching serial shape alone cannot establish the decade or manufacturer."
    ],
    "sources": [
      {
        "title": "Whirlpool & Maytag dryer manual, nomenclature",
        "url": "https://www.whirlpool.com/content/dam/global/documents/201906/service-manual-w11169659.pdf"
      },
      {
        "title": "Whirlpool smart wall ovens, nomenclature",
        "url": "https://www.whirlpool.com/content/dam/global/documents/201809/service-manual-w11174422-whirlpool-smart-wall-ovens.pdf"
      },
      {
        "title": "Whirlpool all-in-one washer/dryer, nomenclature",
        "url": "https://www.whirlpool.com/content/dam/global/documents/201809/service-manual-w11243198-smart-all-in-one-washer-dryer.pdf"
      }
    ]
  },
  "bosch": {
    "title": "Bosch: enter the FD date, not the model",
    "format": "FD followed by four date digits",
    "example": "FD9708",
    "meaning": "August 2017 for the documented four-digit offset format.",
    "scope": "The four-digit FD field is separate from the E-Nr model and the longer production/serial identifier. This tool supports year offsets 20\u201399 (1940\u20132019); newer rollover codes and longer FD values require Bosch confirmation.",
    "pitfalls": [
      "FD 89 means 2009 in this offset system, not 1989.",
      "Copy the E-Nr including its slash suffix for parts or service, but do not put it in the FD date field.",
      "A missing or damaged FD field cannot be reconstructed from the model name alone."
    ],
    "sources": [
      {
        "title": "Bosch manufacturer information: FD year offset",
        "url": "https://media3.bosch-home.com/Documents/8001015234_A.pdf"
      },
      {
        "title": "Bosch dryer identification and service information",
        "url": "https://media3.bosch-home.com/Documents/9001883723_A.pdf"
      }
    ]
  },
  "speed-queen": {
    "title": "Speed Queen: numeric manufacture month",
    "format": "YYMM + six sequence digits",
    "example": "1505000001",
    "meaning": "May 2015.",
    "scope": "Applies to the documented ten-digit numeric Alliance format. Other Alliance equipment can use trailing year/month letters; those formats are outside this calculator.",
    "pitfalls": [
      "Digits three and four in this numeric format are a month, not a week.",
      "Commercial equipment may use a different serial layout. Match the manual before interpreting a date.",
      "Keep the invoice separately: production month does not establish purchase date."
    ],
    "sources": [
      {
        "title": "Alliance tumble-dryer manual: manufacturing date",
        "url": "https://docs.alliancelaundry.com/tech_pdf/production/70457901en.pdf"
      },
      {
        "title": "Alliance alternative trailing-letter format",
        "url": "https://docs.alliancelaundry.com/tech_pdf/production/D1599EN.pdf"
      }
    ]
  },
  "trane": {
    "title": "Trane / American Standard: identify the serial era first",
    "format": "Several date-code eras; model confirmation required",
    "example": "",
    "meaning": "No automatic date is assigned on this site for this family.",
    "scope": "Trane publishes a light-commercial date-code guide. That guide is not a universal decoder for every residential unit, compressor or American Standard model.",
    "pitfalls": [
      "An initial letter may represent a particular year rather than a whole decade. The former decade-letter calculator was removed.",
      "Separate the whole-unit label from compressor and motor labels.",
      "Check whether the equipment is residential or light commercial before choosing a chart."
    ],
    "sources": [
      {
        "title": "Trane light-commercial serial date-code guide",
        "url": "https://support.trane.com/hc/en-us/articles/44514808922893-How-to-read-a-Light-Commercial-Unit-Serial-Number-Date-Code"
      }
    ]
  },
  "york": {
    "title": "York / Coleman / Luxaire / Champion: match the product era",
    "format": "Legacy and later layouts differ",
    "example": "",
    "meaning": "Manufacturer confirmation is required for an exact date.",
    "scope": "A Johnson Controls legacy rooftop guide documents a month in the second character and a year in the third. This does not justify applying a made-up decade rule to newer residential systems.",
    "pitfalls": [
      "Record all letters before searching for a year: the same character can occupy a different role in a different generation.",
      "Do not use ICP date charts for York equipment.",
      "If the installation invoice names a replacement outdoor unit, do not assume the indoor equipment was replaced at the same time."
    ],
    "sources": [
      {
        "title": "Johnson Controls legacy rooftop serial/date table",
        "url": "https://docs.johnsoncontrols.com/bas/api/khub/documents/ZSP_TqV5fFiIchP9SWUj1Q/content"
      },
      {
        "title": "York warranty and registration resources",
        "url": "https://www.york.com/residential-equipment/warranty-and-registration/warranties"
      }
    ]
  },
  "samsung": {
    "title": "Samsung: use the product label and model-specific support",
    "format": "Product-dependent serial formats",
    "example": "",
    "meaning": "No universal year/month positions are asserted here.",
    "scope": "A Galaxy phone, television and refrigerator do not necessarily use the same date-code positions. Use the appliance model and country of sale to obtain a reliable date from Samsung.",
    "pitfalls": [
      "On refrigerators, check the inside label and any exterior label; keep the complete model suffix.",
      "Do not apply a phone IMEI or mobile-device date guide to kitchen equipment.",
      "A warranty record may show purchase coverage; ask separately for the manufacture month if that is the fact you need."
    ],
    "sources": [
      {
        "title": "Samsung appliance label locator",
        "url": "https://www.samsung.com/ca/support/home-appliances/find-the-model-and-serial-numbers-for-your-samsung-device/"
      },
      {
        "title": "Samsung registered-product support",
        "url": "https://www.samsung.com/us/support/shop/products/"
      },
      {
        "title": "Samsung range model and serial locations",
        "url": "https://www.samsung.com/ca/support/home-appliances/finding-the-model-and-serial-numbers-of-your-samsung-range/"
      }
    ]
  },
  "frigidaire": {
    "title": "Frigidaire / Electrolux: preserve the complete identifier",
    "format": "Model and serial together; format depends on product",
    "example": "",
    "meaning": "No date is guessed from a partial numeric substring.",
    "scope": "Record the full model, serial and any product/PNC identifier. Electrolux products sold in different markets need their corresponding support documentation.",
    "pitfalls": [
      "For a refrigerator, the compartment label is more useful than a number on a replacement component.",
      "A two-letter prefix does not prove that the next two characters are a year.",
      "When comparing a used appliance, ask for a readable full-label photo rather than an age stated by a seller."
    ],
    "sources": [
      {
        "title": "Frigidaire appliance label locations",
        "url": "https://owner.frigidaire.com/support-articles/article/1858491-where-can-i-find-my-model-and-serial-number-"
      },
      {
        "title": "Electrolux registration: model, product code and serial",
        "url": "https://ew-registration.electrolux.com/Registration/?code=AEG-GB"
      },
      {
        "title": "Electrolux support: how old is my appliance (European serial format)",
        "url": "https://www.support.emea.electrolux.com/en-uk/Frequently_Asked_Questions/How_old_is_my_appliance"
      }
    ]
  },
  "model-specific": {
    "title": "Kitchen and laundry brands: establish the model family",
    "format": "Model-specific support required",
    "example": "",
    "meaning": "No automatic date is assigned without a verified format.",
    "scope": "KitchenAid, JennAir, Roper and Amana appliance histories include different product families. Kenmore also uses products made by different manufacturers. Shared branding alone cannot identify the date rule.",
    "pitfalls": [
      "Keep the model number and any prefix or suffix with the serial when requesting manufacturer help.",
      "Amana HVAC and Amana Appliances have separate guides on this site; do not interchange them.",
      "Use the actual product manual, not the visual similarity of the serial, to select a numeric-year or letter-year scheme."
    ],
    "sources": [
      {
        "title": "Whirlpool example showing a numeric-year layout",
        "url": "https://www.whirlpool.com/content/dam/global/documents/201809/service-manual-w11174422-whirlpool-smart-wall-ovens.pdf"
      }
    ]
  }
}
export const guideFamilies:Record<BrandKey,string> = {
  "carrier": "carrier",
  "bryant": "carrier",
  "payne": "carrier",
  "goodman": "goodman",
  "amana-hvac": "goodman",
  "daikin": "goodman",
  "lennox": "lennox",
  "heil": "icp",
  "comfortmaker": "icp",
  "tempstar": "icp",
  "keeprite": "icp",
  "rheem": "rheem",
  "ruud": "rheem",
  "ge": "ge",
  "hotpoint": "ge",
  "lg": "lg",
  "whirlpool": "whirlpool",
  "maytag": "whirlpool",
  "bosch": "bosch",
  "speed-queen": "speed-queen",
  "trane": "trane",
  "american-standard": "trane",
  "york": "york",
  "coleman": "york",
  "luxaire": "york",
  "champion-hvac": "york",
  "samsung": "samsung",
  "frigidaire": "frigidaire",
  "electrolux": "frigidaire",
  "kitchenaid": "model-specific",
  "jennair": "model-specific",
  "roper": "model-specific",
  "amana": "model-specific",
  "kenmore": "model-specific"
}
export function getGuide(key:BrandKey){return guides[guideFamilies[key]]}
