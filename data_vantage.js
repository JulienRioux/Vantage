const plantRoom1 = {
	waterHeaters: [
		{
			title: "WATER HEATER 1",
			status: true
		},
		{
			title: "WATER HEATER 2",
			status: false
		},
		{
			title: "WATER HEATER 3",
			status: false
		},
		{
			title: "WATER HEATER 4",
			status: true
		}
	],
	boosterPumps: [
		{
			title: "BOOSTER PUMP 1",
			status: true,
			runTime24h: 15,
			runTime7d: 55
		},
		{
			title: "BOOSTER PUMP 2",
			status: false,
			runTime24h: 20,
			runTime7d: 65
		}
	],
	coldWaterPumps: [
		{
			title: "WATER1",
			status: false
		},
		{
			title: "WATER2",
			status: true
		},
		{
			title: "WATER1",
			status: true
		}
	],
	heatPumps: [
		{
			title: "HEAT PUMP 1",
			day: 3,
			week: 42,
			month: 154,
			status: true
		},
		{
			title: "HEAT PUMP 2",
			day: 1,
			week: 4,
			month: 14,
			status: true
		},
		{
			title: "HEAT PUMP 3",
			day: 5,
			week: 22,
			month: 12,
			status: false
		},
		{
			title: "HEAT PUMP 4",
			day: 1,
			week: 21,
			month: 122,
			status: true
		}
	],
	mainWaterIncomer: {
		pressure: 7.5
	},
	hotWaterSupplyTemp: [
		{
			title: "Heat Pump Set #1",
			temperature: 35
		},
		{
			title: "Heat Pump Set #2",
			temperature: 42
		}
	]
}


const plantRoom2 = {
	waterHeaters: [
		{
			title: "HEATER 1",
			status: true
		},
		{
			title: "HEATER 2",
			status: true
		},
		{
			title: "HEATER 3",
			status: false
		},
		{
			title: "HEATER 4",
			status: false
		},
		{
			title: "HEATER 5",
			status: true
		},
		{
			title: "HEATER 6",
			status: false
		},
		{
			title: "HEATER 7",
			status: false
		}
	],
	boosterPumps: [
		{
			title: "PUMP 1",
			day: 22,
			week: 9,
			month: 10,
			status: true
		},
		{
			title: "PUMP 2",
			day: 2,
			week: 1,
			month: 3,
			status: false
		}
	],
	hotWaterSupply: [
		{
			title: "PUMP 1",
			status: true,
			runTime24h: 15,
			runTime7d: 55,
			runTime30d: 50
		},
		{
			title: "PUMP 2",
			status: false,
			runTime24h: 20,
			runTime7d: 65,
			runTime30d: 11
		},
		{
			title: "PUMP 3",
			status: true,
			runTime24h: 5,
			runTime7d: 25,
			runTime30d: 32
		},
		{
			title: "PUMP 4",
			status: true,
			runTime24h: 21,
			runTime7d: 6,
			runTime30d: 100
		},
		{
			title: "PUMP 5",
			status: false,
			runTime24h: 22,
			runTime7d: 51,
			runTime30d: 5
		}
	],
	circulationPumps: {
		pumps: [
			{
				title: "PUMP 1",
				status: true
			},
			{
				title: "PUMP 2",
				status: false
			}
		],
	},
	hotWaterSupplyUpperLevel: {
		temperature: 44,
		pressure: 1.4
	},
	hotWaterSupplyLowerLevel: {
		temperature: 36,
		pressure: 6.2
	}
}

const heatPumps = {
	hotWaterSupply: [
		{
			title: "HEAT PUMP 1",
			status: true,
			runTime24h: 15,
			runTime7d: 55,
			runTime30d: 50
		},
		{
			title: "HEAT PUMP 2",
			status: false,
			runTime24h: 20,
			runTime7d: 65,
			runTime30d: 11
		},
		{
			title: "HEAT PUMP 3",
			status: true,
			runTime24h: 5,
			runTime7d: 25,
			runTime30d: 32
		},
		{
			title: "HEAT PUMP 4",
			status: true,
			runTime24h: 21,
			runTime7d: 6,
			runTime30d: 100
		},
		{
			title: "HEAT PUMP 5",
			status: false,
			runTime24h: 22,
			runTime7d: 51,
			runTime30d: 5
		},
		{
			title: "HEAT PUMP 6",
			status: true,
			runTime24h: 33,
			runTime7d: 11,
			runTime30d: 68
		},
		{
			title: "HEAT PUMP 7",
			status: true,
			runTime24h: 95,
			runTime30d: 8
		},
		{
			title: "HEAT PUMP 8",
			status: false,
			runTime24h: 0,
			runTime7d: 0,
			runTime30d: 0
		}
	],
	hotWaterSupplyTemp: [
		{
			title: "Heat Pump Set #1",
			temperature: 54
		},
		{
			title: "Heat Pump Set #2",
			temperature: 66
		}
	]
}

const extractionSumpPump = {
	extractorFans: [
		{
			title: "EXTRACTOR FAN 1",
			status: true
		},
		{
			title: "EXTRACTOR FAN 2",
			status: true
		},
		{
			title: "EXTRACTOR FAN 3",
			status: false
		},
		{
			title: "EXTRACTOR FAN 4",
			status: true
		}
	],
	sumpPumps: [
		{
			title: "Sump pump 1",
			status: true,
			runTime24h: 44,
			runTime7d: 79
		},
		{
			title: "Sump pump 2",
			status: false,
			runTime24h: 32,
			runTime7d: 10
		},
		{
			title: "Sump pump 3",
			status: true,
			runTime24h: 70,
			runTime7d: 95
		}
	]
}

const alarmsReports = {
	alarmMTD: [
		{
			title: "Power",
			value: 90
		},
		{
			title: "Water",
			value: 30
		},
		{
			title: "Temperature",
			value: 64
		},
		{
			title: "Water Heating",
			value: 20
		}
	],
	activeAlarms: {
		nonCritical: 10,
		critical: 8,
		totalAlarms: 34
	},
	reports: [
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "10/03/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "10/01/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/22/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/22/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/20/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/19/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/18/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/18/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/17/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/17/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/17/2018"
		},
		{
			group: "Water Heating",
			message: "Hot Water Supply - Low Temperature",
			state: "",
			date: "09/17/2018"
		}
	]
}




const data  = {
	plantRoom1: plantRoom1,
	plantRoom2: plantRoom2,
	heatPumps: heatPumps,
	extractionSumpPump: extractionSumpPump,
	alarmsReports: alarmsReports
}

export default data;
