import React from 'react'
interface IAboutMe {
    messageCount: number,
    datePickerContainer: any, //eact.RefObject<HTMLDivElement>,
    refMouseDownInterval: number,
    datePicked: number,
    timezone: string,
    countryCodeOptions: any,
    availableDates: Array<{
        hour: number,
        day: string,
        date: number,
        month: string,
        year: number,
        available: number,
        unix: number
    }>,
}

class AboutMe extends React.Component {
    constructor(props: any) {
        super(props)
        const countryCode = { "BD": "+880", "BE": "+32", "BF": "+226", "BG": "+359", "BA": "+387", "BB": "+1-246", "WF": "+681", "BL": "+590", "BM": "+1-441", "BN": "+673", "BO": "+591", "BH": "+973", "BI": "+257", "BJ": "+229", "BT": "+975", "JM": "+1-876", "BW": "+267", "WS": "+685", "BQ": "+599", "BR": "+55", "BS": "+1-242", "JE": "+44-1534", "BY": "+375", "BZ": "+501", "RU": "+7", "RW": "+250", "RS": "+381", "TL": "+670", "RE": "+262", "TM": "+993", "TJ": "+992", "RO": "+40", "TK": "+690", "GW": "+245", "GU": "+1-671", "GT": "+502", "GR": "+30", "GQ": "+240", "GP": "+590", "JP": "+81", "GY": "+592", "GG": "+44-1481", "GF": "+594", "GE": "+995", "GD": "+1-473", "GB": "+44", "GA": "+241", "SV": "+503", "GN": "+224", "GM": "+220", "GL": "+299", "GI": "+350", "GH": "+233", "OM": "+968", "TN": "+216", "JO": "+962", "HR": "+385", "HT": "+509", "HU": "+36", "HK": "+852", "HN": "+504", "HM": "+ ", "VE": "+58", "PR": "+1-787 and 1-939", "PS": "+970", "PW": "+680", "PT": "+351", "SJ": "+47", "PY": "+595", "IQ": "+964", "PA": "+507", "PF": "+689", "PG": "+675", "PE": "+51", "PK": "+92", "PH": "+63", "PN": "+870", "PL": "+48", "PM": "+508", "ZM": "+260", "EH": "+212", "EE": "+372", "EG": "+20", "ZA": "+27", "EC": "+593", "IT": "+39", "VN": "+84", "SB": "+677", "ET": "+251", "SO": "+252", "ZW": "+263", "SA": "+966", "ES": "+34", "ER": "+291", "ME": "+382", "MD": "+373", "MG": "+261", "MF": "+590", "MA": "+212", "MC": "+377", "UZ": "+998", "MM": "+95", "ML": "+223", "MO": "+853", "MN": "+976", "MH": "+692", "MK": "+389", "MU": "+230", "MT": "+356", "MW": "+265", "MV": "+960", "MQ": "+596", "MP": "+1-670", "MS": "+1-664", "MR": "+222", "IM": "+44-1624", "UG": "+256", "TZ": "+255", "MY": "+60", "MX": "+52", "IL": "+972", "FR": "+33", "IO": "+246", "SH": "+290", "FI": "+358", "FJ": "+679", "FK": "+500", "FM": "+691", "FO": "+298", "NI": "+505", "NL": "+31", "NO": "+47", "NA": "+264", "VU": "+678", "NC": "+687", "NE": "+227", "NF": "+672", "NG": "+234", "NZ": "+64", "NP": "+977", "NR": "+674", "NU": "+683", "CK": "+682", "CI": "+225", "CH": "+41", "CO": "+57", "CN": "+86", "CM": "+237", "CL": "+56", "CC": "+61", "CA": "+1", "CG": "+242", "CF": "+236", "CD": "+243", "CZ": "+420", "CY": "+357", "CX": "+61", "CR": "+506", "CW": "+599", "CV": "+238", "CU": "+53", "SZ": "+268", "SY": "+963", "SX": "+599", "KG": "+996", "KE": "+254", "SS": "+211", "SR": "+597", "KI": "+686", "KH": "+855", "KN": "+1-869", "KM": "+269", "ST": "+239", "SK": "+421", "KR": "+82", "SI": "+386", "KP": "+850", "KW": "+965", "SN": "+221", "SM": "+378", "SL": "+232", "SC": "+248", "KZ": "+7", "KY": "+1-345", "SG": "+65", "SE": "+46", "SD": "+249", "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "+253", "DK": "+45", "VG": "+1-284", "DE": "+49", "YE": "+967", "DZ": "+213", "US": "+1", "UY": "+598", "YT": "+262", "UM": "+1", "LB": "+961", "LC": "+1-758", "LA": "+856", "TV": "+688", "TW": "+886", "TT": "+1-868", "TR": "+90", "LK": "+94", "LI": "+423", "LV": "+371", "TO": "+676", "LT": "+370", "LU": "+352", "LR": "+231", "LS": "+266", "TH": "+66", "TG": "+228", "TD": "+235", "TC": "+1-649", "LY": "+218", "VA": "+379", "VC": "+1-784", "AE": "+971", "AD": "+376", "AG": "+1-268", "AF": "+93", "AI": "+1-264", "VI": "+1-340", "IS": "+354", "IR": "+98", "AM": "+374", "AL": "+355", "AO": "+244", "AS": "+1-684", "AR": "+54", "AU": "+61", "AT": "+43", "AW": "+297", "IN": "+91", "AX": "+358-18", "AZ": "+994", "IE": "+353", "ID": "+62", "UA": "+380", "QA": "+974", "MZ": "+258" }
        for (const [country, code] of Object.entries(countryCode)) {
            this.state.countryCodeOptions.push(<option key={country} value={`${country}_${code}`}>{country} {code}</option>)
        }
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const availableDate = new Date()
        let hour = 14
        availableDate.setHours(hour, 0, 0, 0)
        let TimeOffset = availableDate.getTimezoneOffset();
        availableDate.setMinutes(TimeOffset)
        for (let i = 0; i < 20; i++) {
            availableDate.setDate(availableDate.getDate() + 1)

            let date = {
                day: daysInWeek[availableDate.getDay()],
                date: availableDate.getDate(),
                hour,
                month: months[availableDate.getMonth()],
                year: availableDate.getFullYear(),
                available: 1,
                unix: availableDate.getTime()
            }
            this.state.availableDates.push(date)
        }
    }

    state: IAboutMe = {
        messageCount: 0,
        datePickerContainer: React.createRef(), // TYPE ERROR (possibly null)
        refMouseDownInterval: 0,
        datePicked: 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        countryCodeOptions: [],
        availableDates: [],
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const target = event.target as typeof event.target & {
                date: { value: string },
                name: { value: string },
                countryCode: { value: string },
                telephone: { value: string },
                message: { value: string }

            };
            const response = await fetch('http://localhost:1234/calendar', {
                method: 'POST',
                body: JSON.stringify({
                    date: target.date.value,
                    name: target.name.value,
                    countryCode: target.countryCode.value,
                    telephone: target.telephone.value,
                    message: target.message.value,
                }),
            })
            console.log(response)
            // const result = await response.json()
            // console.log(result)
            // alert(`Is this your full name: ${result.data}`)
        } catch (e) {
            console.log(e)
        } finally {
            // STOP LOADING
        }
    }

    datePickerScrolling = (moveForward: boolean): void => {
        const refMouseDownInterval = setInterval(() => {
            let value = this.state.datePickerContainer.current.scrollLeft + moveForward ? 20 : -20
            this.setState({ datePickerContainer: value })
        }, 20)
        this.setState({ refMouseDownInterval })
    }

    stopScrolling = (): void => {
        clearInterval(this.state.refMouseDownInterval)
    }

    render() {
        const { messageCount, datePickerContainer, availableDates, countryCodeOptions, datePicked, timezone } = this.state
        return (
            <>
                <div className="my-10 mx-auto w-10/12 pb-10 border-b border-black text-center text-6xl font-semibold">
                    About me
                </div>
                <form className="w-full max-w-3xl mx-auto px-5" onSubmit={this.handleSubmit}>

                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Pick a date``
                    </span>
                    <div className="relative border-x-2 border-gray-200 rounded py-2 mb-3">
                        <div className="h-full w-full absolute flex justify-end items-center bg-opacity-50  pointer-events-none z-50">
                            <button
                                type="button"
                                onMouseDown={() => this.datePickerScrolling(false)}
                                onTouchStart={() => this.datePickerScrolling(false)}
                                onMouseLeave={this.stopScrolling}
                                onMouseUp={this.stopScrolling}
                                onTouchEnd={this.stopScrolling}
                                className="h-8 w-14 mr-3 shadow-2xl bg-gray-700 active:border-transparent hover:border-transparent border-black border text-gray-300 hover:text-white font-black rounded pointer-events-auto bg-opacity-50 hover:bg-opacity-100">&larr;
                            </button>
                            <button type="button"
                                onMouseDown={() => this.datePickerScrolling(true)}
                                onTouchStart={() => this.datePickerScrolling(true)}
                                onMouseLeave={this.stopScrolling}
                                onMouseUp={this.stopScrolling}
                                onTouchEnd={this.stopScrolling}
                                className="h-8 w-14 mr-3 bg-gray-700 active:border-transparent hover:border-transparent border-black border text-gray-300 hover:text-white font-black pointer-events-auto rounded bg-opacity-50 hover:bg-opacity-100">&rarr;
                            </button>

                        </div>
                        <div className="w-full flex overflow-hidden select-none relative pr-28 pl-3 py-5" ref={datePickerContainer}>
                            {availableDates.map((date, index) => {
                                return <label key={`date-${index}`}
                                    className={`${datePicked === date.unix ? 'date-selected' : 'date-unselected'} border-2 mr-3 cursor-pointer transition-all duration-300 ease-in-out py-10 px-5 appearance-none w-full rounded leading-tight focus:outline-none `}
                                    htmlFor={`date-${index}`}>
                                    <div className="text-center">
                                        {date.hour} <br />{date.day} {date.date} {date.month} {date.year}
                                    </div>
                                    <div>{timezone}</div>
                                    <input
                                        id={`date-${index}`}
                                        type="radio"
                                        disabled={!date.available}
                                        onChange={(event) => this.setState({ datePicked: parseInt(event.target.value) })}
                                        name="date"
                                        className="opacity-0 absolute"
                                        required
                                        value={date.unix}
                                    />
                                </label>
                            })}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Your Name
                            </label>
                            <input required
                                className="transition-all duration-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="...or whatever you want me to call you"
                                maxLength={25}
                            />
                            {/* <p className="text-red-500 text-xs italic">
                            Please fill out this field.
                        </p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="telephone"
                            >
                                Telephone

                            </label>
                            <div className="w-full flex">
                                <select name="countryCode" required defaultValue="" className="transition-all duration-300 appearance-none w-3/12 py-3 px-4 mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded-tl rounded-bl outline-none focus:bg-white focus:border-gray-500">
                                    <option value="" disabled>Country code</option>
                                    {countryCodeOptions.map((option: any) => {
                                        return option
                                    })}
                                </select>
                                <input required
                                    className="w-9/12 transition-all duration-300 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded-tr rounded-br py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="telephone"
                                    name="telephone"
                                    type="text"
                                    placeholder="I won't harass you"
                                    maxLength={10}
                                />
                            </div>
                            {/* <p className="text-gray-600 text-xs italic">
                            Make it as long and as crazy as you'd like
                        </p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label
                                className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex justify-between"
                                htmlFor="message"
                            >
                                Message <span className="text-xs font-thin">{messageCount} / 500</span>
                            </label>
                            <textarea
                                onChange={(e) => this.setState({ messageCount: e.target.value.length })}
                                className="transition-all duration-300 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message"
                                name="message"
                                placeholder="It's optional, so make it simple for me please."
                                maxLength={500}
                                rows={5}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <button type="submit" className="mx-auto hover:text-gray-800 text-gray-100 transition-all duration-300 bg-black hover:bg-gray-200 font-semibold  py-2 px-4 border border-black rounded">
                                Book a call
                            </button>
                        </div>
                    </div>
                </form>
            </>
        )
    };
}
export default AboutMe;
