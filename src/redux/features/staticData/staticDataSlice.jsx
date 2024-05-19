import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusCard: [
    {
      id: "1",
      title: "Orders",
      propertyOne:"Upcoming",
      propertyTwo:"Ongoing",
      propertyThree:"Completed",
      propOnevalue: "50",
      propTwovalue: "100",
      propThreevalue: "50"
    },
    {
      id: "2",
      title: "Trips",
      propertyOne:"Upcoming",
      propertyTwo:"Ongoing",
      propertyThree:"Completed",
      propOnevalue: "50",
      propTwovalue: "100",
      propThreevalue: "50"
    },
    {
      id: "3",
      propertyOne:"Upcoming",
      propertyTwo:"Ongoing",
      propertyThree:"Completed",
      propOnevalue: "50",
      propTwovalue: "100",
      propThreevalue: "50"
    },
    {
      id: "4",
      title: "Expenses",
      propertyOne:"Freight Charge",
      propertyTwo:"Driver Charge",
      propertyThree:"Other Charges",
      propOnevalue: "50",
      propTwovalue: "100",
      propThreevalue: "50"
    }
  ],
  alertCard: [
    {
      id: "1",
      title: "Driver Raised concern",
      load: "12454",
      billto: "RoaDo demo Bangalore",
      date: "13 Feb 2024",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
    },
    {
      id: "2",
      title: "Reefer Temp. out of range",
      load: "12454",
      billto: "RoaDo demo Bangalore",
      date: "13 Feb 2024",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
    }
  ]
};

const staticDataSlice = createSlice({
  name: 'staticData',
  initialState,
  reducers: {}
});

export default staticDataSlice.reducer;
