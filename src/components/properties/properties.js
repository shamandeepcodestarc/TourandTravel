import React, { useEffect, useState, Fragment } from 'react';
import axios from "axios";
import { Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './properties.css'
import jQuery from 'jquery'
import common from "../../common/common";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { CheckboxToggle } from 'react-rainbow-components';
import LoaderClass from '../../loader/loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import "react-datepicker/dist/react-datepicker.css";

import {
  InputGroupText,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Container,
  CardBody,
  Card,
  CardTitle,
  FormText,
  Form,
  CustomInput,
  Label,
  UncontrolledAlert,
  UncontrolledTooltip,
  Alert,
  ButtonToggle,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
var roomConuts = [];
$(document).ready(function () {
  $(document).on('click', 'input[name="guest_pay"]', function (e) {
    if ($(this).is(":checked") && $(this).attr("value") == 'half_pay')
    //var inputValue = $(this).attr("value");
    //alert(inputValue);
    {
      $(".half_pay").css("display", "flex");
    } else {
      $(".half_pay").css("display", "none");
    }

  });
   
  $(document).on('click', '#addMore', function (e) {
    e.preventDefault();
    $(".clone_my_room:last").clone().appendTo(".main_room_div");
    roomConuts.push($(".clone_my_room:last").clone());
    console.log(e.target,"========",$(".clone_my_room:last").clone(),roomConuts.length)
  });

  $(document).on('click', '.add_my_new_info_btn', function (e) {
    e.preventDefault();
    $(e.target).closest('.add_my_new_info').before('<div class="row form-group"><label for="exampleTitle" class="col-sm-2 col-form-label">Add Additional Information</label><div class="col-sm-4"><textarea name="ShortDescription" id="exampleText" placeholder="Add any information" class="form-control" style="margin-top: 0px; margin-bottom: 0px; height: 61px;"></textarea></div><Col sm={4}><button class="ml-auto remove_my_info btn btn-primary">Remove</button></Col></div><br />');
  });

  $(document).on('click', '.remove_my_info', function (e) {
    e.preventDefault();
    $(e.target).closest('div').remove();
  });

  $(document).on('click', '.add_my_new_info_btn_music', function (e) {
    e.preventDefault();
    $(e.target).closest('.add_my_new_info_music').before('<div class="form-group"><div class="row"><label for="exampleTitle" class="col-sm-1 col-form-label">1 : Location</label><div class="col-sm-3"><input id="is_room_shared" name="customSelect" type="text" class="form-control"></div></div><div class="form-group"><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Monday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Tuesday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Wednesday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Thursday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Friday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Saturday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Sunday</label></div><label for="room_number" class="col-sm-2 col-form-label">Starting and Closing Time</label><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div></div><div class="row"><label for="exampleTitle" class="col-sm-1 col-form-label">Add any Comments</label><div class="col-sm-3"><textarea name="ShortDescription" id="exampleText" placeholder="for e.g Dress code and Bar opening time" class="form-control"></textarea></div></div><Col sm={4}><button class="ml-auto remove_my_info btn btn-primary">Remove</button></Col></div></div><br />');
  });

  $(document).on('click', '.add_my_new_info_btn_meal', function (e) {
    e.preventDefault();
    $(e.target).closest('.add_my_new_info_meal').before('<div class="row form-group"><label for="exampleTitle" class="col-sm-10 col-form-label">Where are you offering the following: </label><label for="exampleTitle" class="col-sm-4 col-form-label"><b>Location</b></label><label for="exampleTitle" class="col-sm-4 col-form-label"><b>Opening Days</b></label><label for="exampleTitle" class="col-sm-4 col-form-label"><b>Starting and Closing Time</b></label></div><div class="form-group"><div class="row"><div class="col-sm-4"><input name="location" id="location" type="text" class="form-control"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Monday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-4"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Tuesday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-4"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Wednesday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-4"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Thursday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-4"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Friday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-4"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Saturday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row"><div class="col-sm-4"></div><div class="col-sm-1"><input type="checkbox" value=""></div><div class="col-sm-3"><label>Sunday</label></div><div class="col-sm-4"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am" type="text" class="form-control"></div></div><div class="row form-group"><label for="exampleTitle" class="col-sm-2 col-form-label">Add any Comments</label><div class="col-sm-4"><textarea name="ShortDescription" id="exampleText" placeholder="for e.g Dress code and Bar opening time" class="form-control"></textarea></div></div><Col sm={4}><button class="ml-auto remove_my_info btn btn-primary">Remove</button></Col></div></div><br />');
  });

  $(document).on('click', '.add_my_new_info_btn_grocery', function (e) {
    e.preventDefault();
    $(e.target).closest('.add_my_new_info_grocery').before('<div class="row form-group"><label for="exampleTitle" class="col-sm-1 col-form-label">Name</label><div class="col-sm-3"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="" type="text" class="form-control"></div><label for="exampleTitle" class="col-sm-1 col-form-label">Location</label><div class="col-sm-3"><input id="room_xy_dimensions" name="room_xy_dimensions" placeholder="Location" type="text" class="form-control"></div><label for="exampleTitle" class="col-sm-1 col-form-label">Comments</label><div class="col-sm-3"><textarea name="ShortDescription" id="exampleText" placeholder="Add any information" class="form-control"></textarea></div><button class="ml-auto remove_my_info btn btn-primary">Remove</button></div>');
  });

  $(document).on('click', '.add_my_new_info_btn_group_booking', function (e) {
    e.preventDefault();
    $(e.target).closest('.add_my_new_info_group_booking').before('<div class="row form-group"><label for="PoliceStation" class="col-sm-2 col-form-label">Number of Adult:</label><label for="PoliceStation" class=""> From </label><div class="col-sm-2"><input name="child_pay" id="child_pay" placeholder="" type="number" class="form-control"></div> <label for="PoliceStation" class=""> To </label><div class="col-sm-2"><input name="child_pay" id="child_pay" placeholder="" type="number" class="form-control"></div><label for="PoliceStation" class="col-sm-1 col-form-label">Pay</label><div class="col-sm-2"><input name="child_pay" id="child_pay" placeholder="" type="number" class="form-control"></div><lable>per person per night include VAT</lable/><button class="ml-auto remove_my_info btn btn-primary">Remove</button></div>');
  });
});
function Hotels(props) {

   
  const [indexes, setIndexes] = useState([]);
  const [counter, setCounter] = useState(0);

  const addNewField = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeNewField = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFields = () => {
    setIndexes([]);
  };
  const roomOptions = [
    { label: 'Small Single Room ', value: 'Small Single Room' },
    { label: 'Standard Single Room', value: 'Standard Single Room' },
    { label: 'Small Double Room', value: 'Small Double Room' },
    { label: 'Standard Double Room ', value: 'Standard Double Room ' },
    { label: 'superior Double Room  ', value: 'superior Double Room  ' },
    { label: 'SmallTwin Room', value: 'SmallTwin Room' },
    { label: 'Superior Twin Room', value: 'Superior Twin Room' },
    { label: 'Standard Twin Room', value: 'Standard Twin Room' },
    { label: 'Standard King Room ', value: 'Standard King Room ' },
    { label: 'Superior King Room', value: 'Superior King Room' },
    { label: 'Standard Queen Room', value: 'Standard Queen Room' },
    { label: 'Superior Queen Room', value: 'Superior Queen Room' },
    { label: 'Family Room', value: 'Family Room' },
    { label: 'Dorm', value: 'Dorm' }
  ];
  const ViewOptions = [
    { label: 'with Garden View', value: 1 },
    { label: 'with Sea View', value: 2 },
    { label: 'with Pool View', value: 3 },
    { label: 'with Mountain View', value: 4 },
    { label: 'with City View', value: 5 },
    { label: ' with Sunset View', value: 6 },
    { label: 'with View', value: 7 },
    { label: 'with Landmark view', value: 8 },
    { label: 'with Lake View', value: 9 },
    { label: 'with River View', value: 10 },
    { label: 'with Road View', value: 10 },
    { label: 'with No View', value: 10 },
  ];

  const roomsizeOptions = [
    { label: 'Square meters', value: 1 },
    { label: 'Square feet', value: 2 },
  ];

  const bedOptions = [
    { label: 'Single Bed(s)', value: 1 },
    { label: 'Double Bed(s)', value: 2 },
    { label: 'Twin Bed(s', value: 3 },
    { label: 'Triple Bed(s)', value: 4 },
    { label: 'Quad Bed(s)', value: 5 },
    { label: 'King Bed(s)', value: 6 },
    { label: 'Queen Bed(s)', value: 7 },
    { label: 'Fold-up Bed(s)', value: 8 },
    { label: 'Sofa Bed(s)', value: 9 },
    { label: 'Floor Mattress(s)', value: 10 },
    { label: 'Cot Bed(s)', value: 11 },
    { label: 'Baby Crib(s)', value: 12 },
    { label: 'Moses basket(S)', value: 13 },
  ];
  const [EquipmentOptions, setEquipmentOptions] = useState([
    { label: 'A/C ', value: 'A/C ' },
    { label: 'Fan', value: 'Fan' },
    { label: 'A/C & Heater', value: 'A/C & Heater' },
    { label: 'Fan & Heater', value: 'Fan & Heater' },
    { label: 'Add More', value: 36 },
  ]);

  const [facilityOptions, setfacilityOptions] = useState([
    { label: 'Towels', value: 'Towels' },
    { label: 'Beddings', value: 'Beddings' },
    { label: 'Pillows', value: 'Pillows' },
    { label: 'Toilets papers', value: 'Toilets papers' },
    { label: 'Wardrobe', value: 'Wardrobe' },
    { label: 'Drying Clothing Rack', value: 'Drying Clothing Rack' },
    { label: 'Hot tub/Jacuzzi', value: 'Hot tub/Jacuzzi' },
    { label: 'Shower', value: 'Shower' },
    { label: 'Hangers', value: 'Hangers' },
    { label: 'Safe', value: 'Safe' },
    { label: 'Interconnected rooms available', value: 'Interconnected rooms available' },
    { label: 'Soundproof', value: 'Soundproof' },
    { label: 'Free toiletries', value: 'Free toiletries' },
    { label: 'Hairdryer', value: 'Hairdryer' },
    { label: 'Shower/ Bathtub', value: 'Shower/ Bathtub' },
    { label: 'Family room', value: 'Family room' },
    { label: 'Slippers', value: 'Slippers' },
    { label: 'Blankets', value: 'Blankets' },
    { label: 'Workdesk', value: 'Workdesk' },
    { label: 'Iron', value: 'Iron' },
    { label: 'Ironing facilities', value: 'Ironing facilities' },
    { label: 'Mosquito net', value: 'Mosquito net' },
    { label: 'Extra pillows', value: 'Extra pillows' },
    { label: 'Bathrobes', value: 'Bathrobes' },
    { label: 'Room Service', value: 'Room Service' },
    { label: ' Duvet', value: ' Duvet' },
    { label: 'Add Item', value: 37 },
  ]);
  const [otherFacilityOptions, setotherFacilityOptions] = useState([
    { label: 'TV', value: 'TV' },
    { label: ' DVD Player', value: ' DVD Player' },
    { label: 'Landline', value: 'Landline' },
    { label: 'Alarm Clock', value: 'Alarm Clock' },
    { label: 'Ipod dock', value: 'Ipod dock' },
    { label: 'Phone Charger', value: 'Phone Charger' },
    { label: 'Laptop Safe', value: 'Laptop Safe' },
    { label: 'CD player', value: 'CD player' },
    { label: 'Projector', value: 'Projector' },
    { label: 'Cable channels', value: 'Cable channels' },
    { label: 'International Adaptor', value: 'International Adaptor' },
    { label: 'Add Item', value: 12 }
  ]);

  const [foodOptions, setfoodOptions] = useState([
    { label: 'Mini Bar', value: 'Mini Bar' },
    { label: 'Electric Kettle', value: 'Electric Kettle' },
    { label: 'Complimentary Tea/Coffee', value: 'Complimentary Tea/Coffee' },
    { label: 'Cups and Glasses', value: 'Cups and Glasses' },
    { label: 'Coffee machine', value: 'Coffee machine' },
    { label: 'Tea or Coffee maker', value: 'Tea or Coffee maker' },
    { label: 'Add Item', value: 7 },
  ]);
  const SaftyGadgets = [
    { label: 'First Aid Box', value: 1 },
    { label: ' Fire Extinguisher', value: 2 },
    { label: 'Alarm', value: 3 },
    { label: 'Smoke Detector', value: 4 },
    { label: 'Security guard', value: 5 },
    { label: 'Fire Blanket', value: 6 },
    { label: 'CO2 detector', value: 7 },
    { label: 'Fire Door', value: 8 },
    { label: ' Fire Exit', value: 9 },
    { label: ' Lock on the door from inside', value: 10 },
    { label: ' Security Camera', value: 11 },

  ];
  const [IndoorOptions, setIndoorOptions] = useState([
    { label: 'Free Wifi', value: 'Free Wifi' },
    { label: 'Toaster', value: 'Toaster' },
    { label: 'Refrigerator', value: 'Refrigerator' },
    { label: 'Microwave', value: 'Microwave' },
    { label: 'Kitchenware', value: 'Kitchenware' },
    { label: 'Kitchen', value: 'Kitchen' },
    { label: 'Baby Chair', value: 'Baby Chair' },
    { label: 'Dining Area', value: 'Dining Area' },
    { label: 'Dining Table', value: 'Dining Table' },
    { label: 'Sofa', value: 'Sofa' },
    { label: 'Sofa bed', value: 'Sofa bed' },
    { label: 'Lounge', value: 'Lounge' },
    { label: 'Coffee table', value: 'Coffee table' },
    { label: ' Electric Generator', value: ' Electric Generator' },
    { label: 'Water Tank', value: 'Water Tank' },
    { label: 'Cooking basics(Pots and pans, oil, salt and pepper)', value: 'Cooking basics(Pots and pans, oil, salt and pepper)' },
    { label: 'Dishes and silverware', value: 'Dishes and silverware' },
    { label: 'Elevator', value: 'Elevator' },
    { label: 'Living room', value: 'Living room' },
    { label: 'Hot water', value: 'Hot water' },
    { label: 'Hoover', value: 'Hoover' },
    { label: 'Cooker', value: 'Cooker' },
    { label: 'Stove', value: 'Stove' },
    { label: ' Washing Machine', value: ' Washing Machine' },
    { label: ' Washing Dryer', value: ' Washing Dryer' },
    { label: 'Cleaning essentials', value: 'Cleaning essentials' },
    { label: 'Laundry (surcharge)', value: 'Laundry (surcharge)' },
    { label: 'Dry cleaning (surcharge)', value: 'Dry cleaning (surcharge)' },
    { label: 'Ironing (surcharge)', value: 'Ironing (surcharge)' },
    { label: 'Trouser press (surcharge)', value: 'Trouser press (surcharge)' },
    { label: 'Daily cleaning service', value: 'Daily cleaning service' },
    { label: 'A/C', value: 'A/C' },
    { label: 'Fan', value: 'Fan' },
    { label: 'A/c & Heater', value: 'A/c & Heater' },
    { label: 'Fan & Heater', value: 'Fan & Heater' },
    { label: 'Add more', value: 36 },

  ])

  const [outdoorOptions, setoutdoorOptions] = useState([
    { label: 'BBQ', value: 'BBQ' },
    { label: 'Outdoor furniture', value: 'Outdoor furniture' },
    { label: 'Outdoor dining area', value: 'Outdoor dining area' },
    { label: 'Terrace', value: 'Terrace' },
    { label: 'Roof Terrace', value: 'Roof Terrace' },
    { label: 'Patio', value: 'Patio' },
    { label: 'Kids Pool', value: 'Kids Pool' },
    { label: 'Private Pool', value: 'Private Pool' },
    { label: 'Shared Pool', value: 'Shared Pool' },
    { label: 'Jacuzzi', value: 'Jacuzzi' },
    { label: 'Near the beach', value: 'Near the beach' },
    { label: 'Garage parking', value: 'Garage parking' },
    { label: 'Airport Shuttle', value: 'Airport Shuttle' },
    { label: 'Private Garden', value: 'Private Garden' },
    { label: 'Shared Gardens', value: 'Shared Gardens' },
    { label: 'Outdoor parking', value: 'Outdoor parking' },
    { label: 'Golf Course', value: 'Golf Course' },
    { label: 'Activities', value: 'Activities' },
    { label: 'Add more', value: 36 },

  ]);

  const [otherAmenitiesOptions, setotherAmenitiesOptions] = useState([
    { label: 'Serves Halal food', value: 'Serves Halal food' },
    { label: 'Serves Vegetarian food', value: 'Serves Vegetarian food' },
    { label: '24-hour front desk', value: '24-hour front desk' },
    { label: ' Concierge service', value: ' Concierge service' },
    { label: 'Muslim friendly', value: 'Muslim friendly' },
    { label: 'Porter', value: 'Porter' },
    { label: 'Fitness Centre/ Gym', value: 'Fitness Centre/ Gym' },
    { label: 'Bar', value: 'Bar' },
    { label: 'Spa', value: 'Spa' },
    { label: 'Gym', value: 'Gym' },
    { label: 'Fitness Centre', value: 'Fitness Centre' },
    { label: 'Massage Centre', value: 'Massage Centre' },
    { label: 'Disability Access', value: 'Disability Access' },
    { label: 'Activities', value: 'Activities' },
    { label: 'Restaurant', value: 'Restaurant' },
    { label: 'Pet Friendly', value: 'Pet Friendly' },
    { label: 'Golf', value: 'Golf' },
    { label: 'Currency exchange', value: 'Currency exchange' },
    { label: 'Luggage storage', value: 'Luggage storage' },
    { label: 'Newspapers', value: 'Newspapers' },
    { label: 'Tour desk', value: 'Tour desk' },
    { label: 'Designated smoking area', value: 'Designated smoking area' },
    { label: 'Kosher food', value: 'Kosher food' },
    { label: 'Prayer Room(Muslim)', value: 'Prayer Room(Muslim)' },
    { label: 'Kids friendly', value: 'Kids friendly' },
    { label: 'Family friendly', value: 'Family friendly' },
    { label: 'Add More', value: 36 },
  ]);
  const HourMinutes = [
    { label: 'Hours', value: 1 },
    { label: ' Minutes', value: 2 },
  ];

  const flooroptions = [
    { label: 'Entire Property', value: 1 },
    { label: 'Upper Floor', value: 2 },
    { label: 'Ground Floor', value: 2 },
  ];

  const LivelocationOpeningHours = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' }
  ];

  const [list, setList] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCities] = useState([]);
  const [state, setStates] = useState([]);
  const [listing, setListing] = useState([]);


  const [hotelInformation, setHotelInformation] = useState([]);
  const [gethotelInformation, setGetHotelInformation] = useState("");
  const [gethotelInformationCountry, setGetHotelInformationCountry] = useState("");
  const [gethotelInformationState, setGetHotelInformationState] = useState("");
  const [gethotelInformationCity, setGetHotelInformationCity] = useState("");
  const [gethotelInformationListing, setGetHotelInformationListing] = useState("");
  const [roomList, setRoomList] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [isMoreBtn, setIsMoreBtn] = useState(false);
  const [isMoreBtnOUtDoor, setisMoreBtnOUtDoor] = useState(false);
  const [isMoreBtnOther, setIsMoreBtnOther] = useState(false);

  const [GetHtoelInformation, setGetHtoelInformation] = useState("");
  const [bedotions, setbedotion] = useState([]);
  const [PolicyList, setPolicyList] = useState([]);
  const [AllPolicyList, setAllPolicyList] = useState([]);

  const [selecteoutdoor, setselecteoutdoor] = useState([]);
  const [selecteaminities, setselecteaminities] = useState([]);
  const [roomequipped, setroomequipped] = useState([]);
  const [roomeFacilities, setroomFacilities] = useState([]);
  const [otherFacilities, setotherFacilities] = useState([]);
  const [foodOptionstypes, setfoodOptionstypes] = useState([]);
  const [selecteSaftyGadgets, setselecteSaftyGadgets] = useState([]);
  const [ParentCatogery, setParentCatogery] = useState([]);

  const [checkToggle, setCheckToggle] = useState(false);
  const [checkTogglebed, setCheckTogglebed] = useState(false);
  const [checkTogglepool, setCheckTogglepool] = useState(false);
  const [checkTogglebalcony, setCheckTogglebalcony] = useState(false);
  const [checkTogglesuite, setCheckTogglesuite] = useState(false);
  const [checkToggledisability, setCheckToggledisability] = useState(false);
  const [checkTogglegarden, setCheckTogglegarden] = useState(false);
  const [checkTogglelaunge, setCheckTogglelaunge] = useState(false);
  const [checkTogglemusic, setCheckTogglemusic] = useState(false);
  const [checkTogglefood, setCheckTogglefood] = useState(false);
  const [checkToggleactivities, setCheckToggleactivities] = useState(false);
  const [checkTogglespace, setCheckTogglespace] = useState(false);
  const [checkTogglekids, setCheckTogglekids] = useState(false);
  const [checkToggleteens, setCheckToggleteens] = useState(false);
  const [checkTogglenearby, setCheckTogglenearby] = useState(false);
  const [checkToggleMTPA, setCheckToggleMTPA] = useState(false);
  const [checkToggleguest, setCheckToggleguest] = useState(false);
  const [checkTogglemergency, setCheckTogglemergency] = useState(false);
  const [checkTogglediscount, setCheckTogglediscount] = useState(false);
  const [checkToggleminibar, setCheckToggleminibar] = useState(false);
  const [checkToggleconfirm, setCheckToggleconfirm] = useState(false);
  const [checkTogglestay, setCheckTogglestay] = useState(false);
  const [checkTogglechildsuit, setCheckTogglechildsuit] = useState(false);
  const [checkTogglechildrate, setCheckTogglechildrate] = useState(false);
  const [checkTogglegroupbook, setCheckTogglegroupbook] = useState(false);
  const [checkTogglegroupforchild, setCheckTogglegroupforchild] = useState(false);
  const [checkToggledayrate, setCheckToggledayrate] = useState(false);
  const [checkTogglecalendar, setCheckTogglecalendar] = useState(false);
  const [checkTogglebreak, setCheckTogglebreak] = useState(false);
  const [checkTogglelunch, setCheckTogglelunch] = useState(false);
  const [checkToggledinner, setCheckToggledinner] = useState(false);
  const [checkToggletea, setCheckToggletea] = useState(false);
  const [checkTogglesnacks, setCheckTogglesnacks] = useState(false);
  const [checkToggledrinks, setCheckToggledrinks] = useState(false);
  const [checkTogglegrocery, setCheckTogglegrocery] = useState(false);
  const [checkTogglerest, setCheckTogglerest] = useState(false);
  const [checkTogglebar, setCheckTogglebar] = useState(false);
  const [checkToggleclub, setCheckToggleclub] = useState(false);
  const [checkToggleatm, setCheckToggleatm] = useState(false);
  const [choosepayscheckbox, setchoosepayscheckbox] = useState(false);
  const [checkTogglepetrol, setCheckTogglepetrol] = useState(false);
  const [checkTogglebank, setCheckTogglebank] = useState(false);
  const [checkTogglemonex, setCheckTogglemonex] = useState(false);
  const [checkTogglepolice, setCheckTogglepolice] = useState(false);
  const [checkTogglepharmacy, setCheckTogglepharmacy] = useState(false);
  const [checkTogglehosp, setCheckTogglehosp] = useState(false);
  const [checkTogglehalfday, setCheckTogglehalfday] = useState(false);
  const [checkTogglefullday, setCheckTogglefullday] = useState(false);
  const [isMoreBtnquipped, setIsMoreBtnquipped] = useState(false);
  const [isMoreBtnTechnology, setIsMoreBtnTechnology] = useState(false);
  const [isMoreBtnFacilities, setIsMoreBtnFacilities] = useState(false);
  const [isMoreBtnFood, setIsMoreBtnFood] = useState(false);
  const [whatIsAllowCheckbox, setwhatIsAllowCheckbox] = useState(false);
  const [instantBooking, setInstantBooking] = useState(false);
  const [InformationChecked, setInformationChecked] = useState(false);
  
  const [selectpayment, setselectpayment] = useState(false);
  const [checkToggleinfant, setCheckToggleinfant] = useState(false);
  const [loader, setLoader] = useState(true);
  const [ids, setids] = useState("");
  const [startdeal, setstartdeal] = useState("");
  const [Otheractivies, setOtheractivies] = useState("");
  const [quipped, setquipped] = useState("");
  const [noise_from, setnoise_from] = useState("");
  const [infantagefrom, setInfantagefrom] = useState("");

  const [enddeal, setenddeal] = useState("");
  const [checkbox, setcheckbox] = useState(false);
  const [maincheckbox, setmaincheckbox] = useState(false);
  const [livecheckbox, setlivecheckbox] = useState(false);
  const [Technology, setTechnology] = useState('');
  const [Food, setFood] = useState('');

  const [getpolciyInformation, setpolciyInformationn] = useState([]);
  const [select_child_cat_data, setselect_child_cat_data] = useState([]);
  const [Select_patent_cat_data, setSelect_patent_cat_data] = useState([]);
  const [moreWhatAllow, setMoreWhatAllow] = useState('');
  const [policeDetails, setPoliceDetails] = useState('');
  const [HospitalDetails, setHospitalDetails] = useState('');
  const [fireDetails, setfireDetails] = useState('');
  /////
  const [propertyName, setPropertyName] = useState("");
  const [title, setTitle] = useState("");
  const [footballLoc, setfootballLoc] = useState("");
  const [musiclocation, setmusiclocation] = useState("");
  const [dennerlocation, setdennerlocation] = useState("");
  const [dennerlocation_days, setdennerlocation_days] = useState([]);
  const [dennercomment, setdennercomment] = useState("");
  const [GuestFrom, setGuestFrom] = useState("");

  const [Listing, setListings] = useState("");

  const [ShortDescription, setShortDescription] = useState("");
  const [TotalRooms, setTotalRooms] = useState("");
  const [PropertyType, setPropertyType] = useState("");
  const [StarRatings, setStarRatings] = useState("");
  const [Countries, setCountries] = useState("");
  const [PropertyNo, setPropertyNo] = useState("");
  const [teacomment, setteacomment] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [lunchlocation, setlunchlocation] = useState("");
  const [Landmark, setLandmarks] = useState("");
  const [Location, setLocation] = useState("");
  const [HalfDayPrice, setHalfDayPrice] = useState("");
  const [FullDayPrice, setFullDayPrice] = useState("");
  const [images, setImages] = useState("");
  const [Facility, setFacility] = useState("");
  const [Floor, setFloor] = useState("");
  const [RoomNumber, setRoomNumber] = useState("");
  const [CityId, setCityId] = useState("");
  const [StateId, setStateId] = useState("");
  const [countryId, setcountryId] = useState("");
  const [Address, setAddress] = useState("");
  const [accommodate, setaccommodate] = useState("");
  const [poolType, setpoolType] = useState("");
  const [gardenType, setgardenType] = useState("");
  const [BasketCommets, setBasketCommets] = useState("");
  const [lunchcomment, setlunchcomment] = useState("");
  const [mealcomment, setmealcomment] = useState("");
  const [ChargeableActivity, setChargeableActivity] = useState("");
  const [freeactivities, setfreeactivities] = useState("");
  const [freeactivity, setfreeactivity] = useState("");
  const [Outdooractivies, setOutdooractivies] = useState("");
  const [AgeGroup, setAgeGroup] = useState("");
  const [KidComment, setKidComment] = useState("");
  const [TeenComment, setTeenComment] = useState("");
  const [descriptionscp, setdescriptionscp] = useState("");
  const [guestAccess, setguestAccess] = useState("");
  const [nerbyPlaceName, setnerbyPlaceName] = useState("");
  const [teaLocation, setteaLocation] = useState("");
  // const [noOfBeds, setnoOfBeds] = useState("");
  const [chiled_index, setchiled_index] = useState("");
  const [bedquantity, setbedquantity] = useState("");
  const [Price, setPrice] = useState("");
  const [noise_to, setnoise_to] = useState("");
  const [minStayDayOption, setMinStayDayOption] = useState("");
  const [minStayDayOptionTime, setMinStayDayOptionTime] = useState("");
  const [maxStayDayOption, setMaxStayDayOption] = useState("");
  const [maxStayDayOptionTime, setMaxStayDayOptionTime] = useState("");

  const [pronameError, setPronameErrors] = useState('');
  const [StateError, setStateError] = useState('');
  const [TitleError, setTitleError] = useState('');
  const [TypeError, setTypeError] = useState('');
  const [RoomError, setRoomError] = useState('');
  const [FloorError, setFloorError] = useState('');
  const [RatingsError, setRatingsError] = useState('');
  const [CountriesrError, setCountriesrError] = useState('');
  const [CityError, setCityError] = useState('');
  const [LocationErrorr, setLocationErrorr] = useState('');
  const [PropNOError, setPropNOError] = useState('');
  const [AdressError, setAdressError] = useState('');
  const [landmarkError, setlandmarkError] = useState('');
  const [ListingError, setListingError] = useState('');
  const [Facilities, setFacilities] = useState('');
  const [LocationError, setLocationError] = useState('');
  const [DiscriptionError, setDiscriptionError] = useState('');
  const [PriceError, setPriceError] = useState('');
  const [TeenClub, setTeenClub] = useState('');
  const [childsuitage, setchildsuitage] = useState('');
  const [items, setItems] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [Policydescription, setPolicydescription] = useState([]);
  const [elect_patent_cat_data, setelect_patent_cat_data] = useState([]);
  const [Indexess, setIndexess] = useState('');
  const [groceryLocation, setGroceryLocation] = useState('');
  const [GuestArrive, setGuestArrive] = useState('');
  const [TimeGuestArrive, setTimeGuestArrive] = useState('');
  const [infantageto, setInfantageto] = useState('');
  const [PayFull, setPayfull ] = useState('');
  const [GuestConform, setGuestConform ] = useState('');
  
  const [Roomtype, setRoomtype] = useState(' ');
  const [nobathroom, setnobathroom] = useState(' ');
  const [toilets, settoilets] = useState(' ');
  const [drop, setdrop] = useState(' ');
  const [childAge, setchildAge] = useState('');
  const [Adult_rate, setAdult_rate] = useState(' ');
  const [agefrom, setAgefrom] = useState('');
  const [ageto, setAgeto] = useState('');
  const [halfdayTime, setHalfdayTime] = useState('');
  const [halfdayTimeto, setHalfdayTimeto] = useState('');
  const [GuestPay, setGuestPay] = useState('');
  const [discount, setDiscount] = useState('');
  const [CheckInOutTime, setCheckInOutTime] = useState('');
  const [CheckInOut, setCheckInOut] = useState('');
  const [CheckInFromTime, setCheckInFromTime] = useState('');
  const [CheckInFrom, setCheckInFrom] = useState('');
  //const [livelocationHours, setlivelocationHours] = useState([]);
  
  const [bedtype, setBedtypes] = useState([]);
  const [livemusicDescription, setLivemusicDescription] = useState('');
  const [allergens, setAllergens] = useState('');
  const [viewtype, setViewtypes] = useState('');
  const [Roomsize, setRoomsize] = useState([]);
  const [mealtypeoffer, setmealtypeoffer] = useState('');

  const [InformationAdddata, setInformationAdddata] = useState([]);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [notify1, setNotify1] = useState(false);

  const toggle4 = () => setModal4(!modal4);
  const toggle3 = () => setModal3(!modal3);
  const toggle2 = () => setModal2(!modal2);
  const toggle5 = () => setModal5(!modal5);
  //var livecheckbox = new Array();
  const notifyToggle1 = () => setNotify1(!notify1)

  const toggle1 = () => setModal1(!modal1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [roomModel, setRoomModel] = useState(true);
  const checkedItems = new Map()
 //const [parant_car,setparant_car]=useState([]);

  $(document).on('click', '.delete_room', function (e) {
    e.preventDefault();
    debugger
    if(roomConuts.length == 0){
    setCheckTogglebed(false)
    }
    $(e.target).closest('.card').remove();
  });

  const emptySetVariable = () => {
    setStateError('');
    setListingError('');
    setTitleError('');
    setTypeError('');
    setListingError('');
    setRatingsError('');
    setCountriesrError('');
    setCityError('');
    setPropNOError('');
    setlandmarkError('');
    setLocationErrorr('');
    setAdressError('');
    setPriceError('');
    setDiscriptionError('');
  }

  const addFriend123 = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };
  const addFriend = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };
  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };
  let history = useHistory();
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 36) {
          setIsMoreBtn(true);
        }
      }
    } else {
      setIsMoreBtn(false);
    }
  }

  const handleType = (e) => {
    setBedtypes(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 36) {
          setIsMoreBtn(true);
        }
      }
    } else {
      setIsMoreBtn(false);
    }
  }
  const handleOutdoor = (e) => {
    setselecteoutdoor(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 36) {
          setisMoreBtnOUtDoor(true);
        }
      }

    } else {
      setisMoreBtnOUtDoor(false);
    }
  }
  const handleAminities = (e) => {
    setselecteaminities(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 36) {
          setIsMoreBtnOther(true);
        }
      }

    } else {
      setIsMoreBtnOther(false);
    }
  }
  const handleEquipped = (e) => {
    setroomequipped(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 36) {
          setIsMoreBtnquipped(true);
        }
      }

    } else {
      setIsMoreBtnquipped(false);
    }
  }
  const handleFacilities = (e) => {
    setroomFacilities(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 37) {
          setIsMoreBtnFacilities(true);
        }
      }

    } else {
      setIsMoreBtnFacilities(false);
    }
  }
  const handleotherFacilities = (e) => {
    setotherFacilities(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 12) {
          setIsMoreBtnTechnology(true);
        }
      }

    } else {
      setIsMoreBtnTechnology(false);
    }
  }
  const handlefoodOptionstypes = (e) => {
    setfoodOptionstypes(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 7) {
          setIsMoreBtnFood(true);
        }
      }

    } else {
      setIsMoreBtnFood(false);
    }
  }
  const handleselecteSaftyGadgets = (e) => {
    setselecteSaftyGadgets(Array.isArray(e) ? e.map(x => x.value) : []);
    let data = e;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == 36) {
          setIsMoreBtn(true);
        }
      }

    } else {
      setIsMoreBtn(false);
    }
  }
  var parant_car = new Array();  
  
  const Select_patent_cat = (parent_e) => {
    var flage = parent_e.target.checked;
    setIndexess(parent_e.target.value)
    var chks = $("input[type=checkbox][name=checkboxMain]")
    //var childchks = $("input[type=checkbox][name=Chidcheckbox]")
    for (var i = 0; i < chks.length; i++) {
        if (flage === true) {
          $('#hidediv_' + parent_e.target.value).show();
		  
          if (chks[i].checked) {
            parant_car.push(AllPolicyList[i])
          }
        } else {
          $('#hidediv_' + parent_e.target.value).hide();
          var element =  AllPolicyList[parent_e.target.value].id;

          if(select_child_cat_data.length!=0){

            // var index111 = select_child_cat_data.map(x => {
            //   return x.policy_category_id;
            // }).indexOf(element);

            //removed array value from child array
            for(let p=0;p<select_child_cat_data.length;p++){
              if(select_child_cat_data[p].policy_category_id === element){
                select_child_cat_data.splice(p, 1);
                console.log(element)
              }
            }
            //end remove array from child
              // unchecked
              var x = document.getElementsByClassName("item_"+element);
              for(let ii=0; ii<=x.length; ii++) {
                if (typeof(x[ii]) != "undefined"){
                  x[ii].checked = false;
                }
              } 
              //end unchecked
              //select_child_cat_data.splice(index111, 1);
            
          }
        }
    setSelect_patent_cat_data(parant_car)
    }
  }
  const select_child_cat = (child_e) => {
    var child_car = new Array();
    setchiled_index(child_e.target)
    var chks = $("input[type=checkbox][name=Chidcheckbox]")
    //var childchks = $("input[type=checkbox][name=Chidcheckbox]")
      var data = (child_e.target).attributes.parentindex;
          if(child_e.target.checked){
         child_car.push(AllPolicyList[data.value].getcancelpolicy.filter(function (test) {
         if(parseInt((child_e.target).attributes.parentid.value) == test.policy_category_id && AllPolicyList[data.value].getcancelpolicy[child_e.target.value] == test)
         {
           select_child_cat_data.push(test)    
           select_child_cat_data.toString();   
         }
    }
    ));
  }else{
         child_car.push(AllPolicyList[data.value].getcancelpolicy.filter(function (test) {
         if(parseInt((child_e.target).attributes.parentid.value) == test.policy_category_id && AllPolicyList[data.value].getcancelpolicy[child_e.target.value] == test)
         {
           select_child_cat_data.pop(test)       
         }
    }
    ));
  }
  }

  const cencellpolicyfun=(e)=>
  {
    e.preventDefault();
    console.log(Select_patent_cat_data.toString(),'============+++++')
    console.log(select_child_cat_data.toString(),'============')
  }
   var selectTime=()=>{
     debugger
    var input = document.getElementsByName('checkdennerlocation[]');
    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        if(input[i].value != ""){
          dennerlocation_days.push(input[i].value)
          console.log(dennerlocation_days,"============");  
        }
    }
   }
  const readURI= (e) =>{
    if (e.target.files) {
      //setImages(e.target.files[0]);
        let filesAmount = e.target.files.length;
        setImages(images[0]);
        // let i;
        // for (i = 0; i < filesAmount; i++) {
        //   console.log(e.target.files[i]);
        //    images.push(e.target.files[i]);
        //  setImages(images);
        // }
    }
  }
  const handleFileChange= (e) => {
    if (e.target.files) {
      readURI(e)
   }
  }
  const AddmoreInformation =(e)=>{
   var input = document.getElementsByName('moreWhatAllow');
    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        if(input[i].value != ""){
     if(moreWhatAllow != null || moreWhatAllow != undefined){
          whatIsAllowData.push(moreWhatAllow)
          console.log(whatIsAllowData,"============");  
         console.log(e.target.value,'=========',moreWhatAllow)
      }
       }
   }
  }
  var AllowInfoData = new Array();
  
  var whatIsAllowData = new Array();
  const whatIsAllow=(e)=>{
    setwhatIsAllowCheckbox(!whatIsAllowCheckbox)
    var chks = $("input[type=checkbox][name=whatIsAllowed]")
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
          whatIsAllowData.push(chks[i].value)
         // parant_car.toString();
        }
      } 
  }
  var choosepaysdata = new Array();
  const choosepays=(e)=>{
    setchoosepayscheckbox(!choosepayscheckbox)
    var chks = $("input[type=checkbox][name=choose_pays]")
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
          choosepaysdata.push(chks[i].value)
          choosepaysdata.toString();
        }
      } 
  }
  
  var validEmaildata = new Array();
  const validEmailfun=(e)=>{
    setInstantBooking(!instantBooking)
    var chks = $("input[type=checkbox][name=validEmail]")
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
          validEmaildata.push(chks[i].value)
          validEmaildata.toString();
         // parant_car.toString();
        }
      } 
      console.log(validEmaildata)
  }
  const InformationAdd=(e)=>{
    var chks = $("input[type=checkbox][name=additonal_info]")
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
          AllowInfoData.push(chks[i].value)
          AllowInfoData.toString();
         // parant_car.toString();
        }
      } 
  }
  // var livelocationHours = new Array(); 
  // function livelocationHoursFun(){
  //   var test_arr = $("input[name*='livehours']");
  //   $.each(test_arr, function(i, item) {  //i=index, item=element in array
  //       alert($(item).val());
  //   });
  // } 

  const livelocationHoursFun=(e)=>{
    setlivecheckbox(!livecheckbox)
    var chks = $("input[type=checkbox][name=livehours]")
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
         //livelocationHours.push(chks[i].value)
         // livelocationHours.toString();
         // parant_car.toString(); 
        }
      } 
  }
  const handleChangeFor=(e)=>{
    console.log(e.target.value,e.target.name);
  }

  const customDates = ['2021-07-03', '2021-07-04', '2021-07-05'];
  const disableCustomDt = current => {
    debugger
    return !customDates.includes(current.format('YYYY-MM-DD'));
  }

  const handleSubmitDeal = (e) => {
    e.preventDefault();
    var equipped = roomequipped.toString();
    var facilityOp = otherFacilities.toString();
    var foodOpypes = foodOptionstypes.toString();
    var selVaues = selectedValue.toString();
    var outdoor = selecteoutdoor.toString();
    var aminities = selecteaminities.toString();
    var saflygadge = selecteSaftyGadgets.toString();
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/, '');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    //  var subcat = select_child_cat_data.toString();
    //  var maincat = parant_car.toString();

    let payload = {
      title: title,
      property_name: propertyName,
      description: ShortDescription,
      total_rooms: TotalRooms,
      floor: Floor,
      star_rating: StarRatings,
      prop_reg: PropertyNo,
      address: Address,
      land_mark: Landmark,
      location: Location,
      pricing: Price,
      // half_day_price: HalfDayPrice,
      // full_day_price:FullDayPrice,
      property_type: PropertyType,
      room_type: PropertyType,
      image: images[0],
      country_id: Countries,
      state_id: State,
      city_id: 3,
      listing_id: Listing,
      cancal_policy: parant_car,
      sub_category:select_child_cat_data,
      // bedroom_with_list: "",
      with_list_room_only: checkToggle,
      with_list_room_type: PropertyType,
      // with_list_room_bedroom_numb: null,
      with_list_room_size: Roomsize,
      with_list_room_numb: RoomNumber,
      with_list_roomtype: Roomtype,
      // with_list_bedtype: bedOptions,
      with_list_viewtype: viewtype,
      with_list_accommodate: accommodate,
      with_list_balcony: checkTogglebalcony,
      with_listing_esuite: checkTogglesuite,
      with_list_disablity: checkToggledisability,
      with_list_minibar: checkToggleminibar,
      with_list_roomequip: equipped,
      with_list_roomefacil: facilityOp,
      //  with_list_roometech: facilityOp,
      with_list_roomefooddrink: foodOpypes,
      numb_of_bathroom: nobathroom,
      numb_of_toilet: toilets,
      prop_swimming: checkTogglepool,
      prop_swimming_type: poolType,
      prop_garden: checkTogglegarden,
      prop_garden_type: gardenType,
      prop_lounge: checkTogglelaunge,
      prop_live_music: checkTogglemusic,
      prop_live_music_location: musiclocation,
      //prop_live_music_day_time: null,
      day_time:checkToggledayrate,
      prop_meal_with_listing: checkTogglefood,
      prop_meal_option: mealtypeoffer,
      prop_breakfast_location: footballLoc,
      // prop_breakfast_days_time: null,
      prop_breakfast_comments: BasketCommets,
      prop_lunch_location: checkTogglelunch,
      // prop_lunch_days_time: null,
      prop_lunch_comments: lunchcomment,
      prop_noontea_location: teaLocation,
      // prop_noontea_days_time: null,
      prop_noontea_comments: teacomment,
      prop_dinner_location: dennerlocation,
      // prop_dinner_days_time: null,
      prop_dinner_comments: dennercomment,
      prop_amenities_indoor: selVaues,
      prop_amenities_outdoor: outdoor,
      prop_amenities_otherdoor: aminities,
      activity_list: checkToggleactivities,
      free_actvi_list: freeactivities,
      charge_actvi_list: ChargeableActivity,
      kid_club: checkTogglekids,
      kid_club_age: AgeGroup,
      // kid_club_datime: null,
      kid_club_commt: KidComment,
      teen_club: checkToggleteens,
      teen_club_age: TeenClub,
      // teen_club_datime: null,
      teen_club_commt: TeenComment,
      space_status: checkTogglespace,
      space_descp: descriptionscp,
      guest_access_status: checkToggleguest,
      guest_access: guestAccess,
      rec_near_plac: checkTogglenearby,
      rec_plac_name: nerbyPlaceName,
      // rule_smoke: null,
      // rule_event_parties: null,
      child_suit_age: childsuitage,
      what_allow:whatIsAllowData
    }
    axios.post(`${common.api_url}staydeal`, payload, config)
      .then(res => {
        if (res.data.data) {
          getData();
          setModalIsOpen(false)
          swal("Deal publish Successfully!", "success");
          
          return res.data.data;
          // history.push('/rooms', roomModel)
        }
      }).catch(err => {
        console.log(err);
      })

  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    emptySetVariable();
    choosepays();
    whatIsAllow();
    validEmailfun();
    InformationAdd();
    //InformationAdd();
    var equipped = roomequipped.toString();
    var facilityOp = otherFacilities.toString();
    var foodOpypes = foodOptionstypes.toString();
    var selVaues = selectedValue.toString();
    var outdoor = selecteoutdoor.toString();
    var aminities = selecteaminities.toString();
    var saflygadge = selecteSaftyGadgets.toString();
    var emailvaliddata=validEmaildata.toString();
    var InfoData=AllowInfoData.toString();
    //var locationhours=livelocationHours.toString();
    var whatisallow =whatIsAllowData.toString();
    var choospay =choosepaysdata.toString();
   // var cancellation = parant_car.toString();
   // var policy = parant_car.toString();
   // var child_data = select_child_cat_data.toString();
    // if (address == '') {
    //   setadresserror('address is required!');
    //   return;
    // }
    // if (title == '') {
    //   settitleerror('title is required!');
    //   return;
    // }

    // if (propertytype == '') {
    //   settypeerror('phone type is required!');
    //   return;
    // } if (totalrooms == '') {
    //   setroomerror('total rooms is required!');
    //   return;
    // }
    // if (listing == '') {
    //   setlistingerror('listing is required!');
    //   return;
    // }
    // if (starratings == '') {
    //   setratingserror('catogery is required!');
    //   return;
    // }
    // if (countries == '') {
    //   setcountriesrerror('country is required!');
    //   return;
    // }
    // if (city == '') {
    //   setcityerror('city is required!');
    //   return;
    // } if (propertyno == '') {
    //   setpropnoerror('property no is required!');
    //   return;
    // } if (state == '') {
    //   setstateerror('state no is required!');
    //   return;
    // }
    // if (landmark == '') {
    //   setlandmarkerror('landmark is required!');
    //   return;
    // }
    // if (location == '') {
    //   setlocationerror('location is required!');
    //   return;
    // } if (shortdescription == '') {
    //   setdiscriptionerror('description is required!');
    //   return;
    // }
    // if (price == '') {
    //   setpriceerror('price is required!');
    //   return;
    // }
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/, '');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
   // dateAvabilities();
    let payload = {
      title: title,
      property_name: propertyName,
      description: ShortDescription,
      total_rooms: TotalRooms,
      floor: Floor,
      star_rating: 3,
      prop_reg: PropertyNo,
      address:Address,
      land_mark: Landmark,
      location: Location,
      pricing: Price,
	  safty_gadgets:saflygadge,
      // half_day_price: HalfDayPrice,
      // full_day_price:FullDayPrice,
      property_type: PropertyType,
      room_type: PropertyType,
      image: images[0],
      country_id: Countries,
      state_id: State,
      city_id: 3,
      listing_id: 1,
	  police_detail:policeDetails,
	  hospital_detail:HospitalDetails,
	  fire_detail:fireDetails,
      cancal_policy: Select_patent_cat_data,
       sub_category:select_child_cat_data,
      // bedroom_with_list: "",
      with_list_room_only: checkToggle,
      with_list_room_type: PropertyType,
      // with_list_room_bedroom_numb: null,
      with_list_room_size: Roomsize,
      with_list_room_numb: RoomNumber,
      with_list_roomtype: Roomtype,
      // with_list_bedtype: bedOptions,
      with_list_viewtype: viewtype,
      with_list_accommodate: accommodate,
      with_list_balcony: checkTogglebalcony,
      with_listing_esuite: checkTogglesuite,
      with_list_disablity: checkToggledisability,
      with_list_minibar: checkToggleminibar,
      with_list_roomequip: equipped,
      with_list_roomefacil: facilityOp,
      //  with_list_roometech: facilityOp,
      with_list_roomefooddrink: foodOpypes,
      numb_of_bathroom: nobathroom,
      numb_of_toilet: toilets,
      prop_swimming: checkTogglepool,
      prop_swimming_type: poolType,
      //guest_conform:GuestConform,
      prop_garden: checkTogglegarden,
      prop_garden_type: gardenType,
      prop_lounge: checkTogglelaunge,
      prop_live_music: checkTogglemusic,
      prop_live_music_location: musiclocation,
      //prop_live_music_day_time: null,
      prop_meal_with_listing: checkTogglefood,
      prop_meal_option: mealtypeoffer,
      prop_breakfast_location: footballLoc,
      // prop_breakfast_days_time: null,
      prop_breakfast_comments: BasketCommets,
      prop_lunch_location: checkTogglelunch,
      // prop_lunch_days_time: null,
      prop_lunch_comments: lunchcomment,
      prop_noontea_location: teaLocation,
      // prop_noontea_days_time: null,
      prop_noontea_comments: teacomment,
      prop_dinner_location: dennerlocation,
      // prop_dinner_days_time: null,
      prop_dinner_comments: dennercomment,
      prop_amenities_indoor: selVaues,
      prop_amenities_outdoor: outdoor,
      prop_amenities_otherdoor: aminities,
      activity_list: checkToggleactivities,
      free_actvi_list: freeactivities,
      charge_actvi_list: ChargeableActivity,
      kid_club: checkTogglekids,
      kid_club_age: AgeGroup,
      // kid_club_datime: null,
      kid_club_commt: KidComment,
      teen_club: checkToggleteens,
      teen_club_age: TeenClub,
      // teen_club_datime: null,
      teen_club_commt: TeenComment,
      space_status: checkTogglespace,
      space_descp: descriptionscp,
      guest_access_status: checkToggleguest,
      guest_access: guestAccess,
      rec_near_plac: checkTogglenearby,
      rec_plac_name: nerbyPlaceName,
      // rule_smoke: null,
      // rule_event_parties: null,
      child_suit_age: childsuitage,
      what_allow:whatisallow,
     // sub_category:child_data,
      noise_from:noise_from,
      adult_rate:Adult_rate,
      suitable_for_child:checkTogglechildsuit,
      special_rate:checkTogglechildrate,
      child_age_from:agefrom,
      child_age_to:ageto,
      full_day_time_from:halfdayTime,
      full_day_time_to:halfdayTimeto,
      full_Guest_pay:GuestPay,
      discount:checkTogglediscount,
	  discut_code:discount,
	  guest_wel_message:GuestConform,
      guests_arrive:TimeGuestArrive + GuestArrive,
      min_stay_day_option:minStayDayOption + minStayDayOptionTime,
      max_stay_day_option:maxStayDayOption + maxStayDayOptionTime,
      Check_in_from : CheckInFrom,
      Check_in_to:CheckInFromTime,
      Check_out_from:CheckInOutTime,
      Check_out_to:CheckInOut,
      upfront_pay_checkbox:choospay,
      instant_booking:emailvaliddata,
      additonal_info:InfoData,
     // bedtype:
     // Check_in_from : CheckInFrom + CheckInFromTime,
     // groceryLocation
     // cancal_policy
    }
    axios.post(`${common.api_url}properties`, payload, config)
      .then(res => {
        if (res.data.data) {
          toggle3(false)
          getData();
          swal("Deal Added Successfully!", "success");
          return res.data.data;
          // history.push('/rooms', roomModel)
        }
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(() => {
    getData();
    getCountries();
    getListing();
    policydata(); 
  }, [])
  const getData = () => {
    let token = localStorage.getItem("key");
    if (token) {
      var token1 = token.replace(/"/g, "");
      // console.log(token);
    } else {
      return <Redirect to='/' />

    }
    const config = {
      headers: {
        'Content-Type': 'applicatio/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}properties`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setList(jsonPrser.data.data)
        setLoader(false)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
    axios.get(`${common.api_url}rooms`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setRoomList(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }
   
  const getCountries = () => {

    axios.get(`${common.api_url}countries`).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setCountry(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const getCities = (id) => {
    axios.get(`${common.api_url}getStateByCity/${id}`).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setCities(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }
  const getStates = (id) => {
    axios.get(`${common.api_url}getCountryByState/${id}`).then((response) => {

      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setStates(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }

  const AddmoreOptionsIndoor = () => {
    var options = { label: freeactivity.toString(), value: freeactivity.toString() };
    IndoorOptions.push(options);
    setIsMoreBtn(false)
  }
  const AddmoreOptionsOutdoor = () => {
    var options = { label: Outdooractivies.toString(), value: Outdooractivies.toString() };
    outdoorOptions.push(options);
    setisMoreBtnOUtDoor(false)
  }
  const AddmoreOptionsOther = () => {
    var options = { label: Otheractivies.toString(), value: Otheractivies.toString() };
    otherAmenitiesOptions.push(options);
    setIsMoreBtnOther(false)
  }
  const AddmoreOptionsquipped = () => {
    var options = { label: quipped.toString(), value: quipped.toString() };
    EquipmentOptions.push(options);
    setIsMoreBtnquipped(false)
  }
  const AddmoreOptionsTechnology = () => {
    var options = { label: Technology.toString(), value: Technology.toString() };
    otherFacilityOptions.push(options);
    setIsMoreBtnTechnology(false)
  }
  const AddmoreOptionsFacilities = () => {
    debugger
    var options = { label: Facilities.toString(), value: Facilities.toString() };
    facilityOptions.push(options);
    setIsMoreBtnFacilities(false)
  }
  const AddmoreOptionsFood = () => {
    debugger
    var options = { label: Food.toString(), value: Food.toString() };
    foodOptions.push(options);
    setIsMoreBtnFood(false)
  }

  const getListing = () => {
    let token = localStorage.getItem("key");
    if (token) {
      var token1 = token.replace(/"/g, "");
    } else {
      return <Redirect to='/' />
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };

    axios.get(`${common.api_url}listing`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setListing(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }
  const removeData = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.delete(`${common.api_url}properties/${id}`, config)
      .then(res => {
        if (res) {
          toggle4(false);
          swal("Deal deleted Successfully!");
          getData();
          const users = res.data;
          this.setState({ users });
        }
      }).catch(err => {
        console.log(err);
      })
  }
  const viewData = (id) => {
    console.log(id);
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}properties/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setHotelInformation(jsonPrser.data.data)
        setGetHotelInformationCountry(jsonPrser.data.data.get_countries[0])
        setGetHotelInformationState(jsonPrser.data.data.get_states[0])
        setGetHotelInformationCity(jsonPrser.data.data.get_cities[0])
        setGetHotelInformationListing(jsonPrser.data.data.get_listing[0])
        toggle2(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');

    });
  }

  const viewForDeleteData = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}properties/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setHotelInformation(jsonPrser.data.data)
        setids(jsonPrser.data.data.id)
        toggle4(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');

    });

  }
  const policydata = () => {
    let token = localStorage.getItem("key");
    if (token) {
      var token1 = token.replace(/"/g, "");
    } else {
      return <Redirect to='/' />

    }
    const config = {
      headers: {
        'Content-Type': 'applicatio/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}getCatogeryToCancelPolicy`, config).then((response) => {
      var dataJson = JSON.stringify(response);
      var jsonPrser = JSON.parse(dataJson);
      var datas = jsonPrser.data.data;
      if (jsonPrser.status == 200) {
        setPolicyList(jsonPrser.data.data)
        var Polciydata = jsonPrser.data.data;
        //  console.log(jsonPrser.data.data,'dddddddddd')
        setAllPolicyList(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }
  const AddMOreBedType = (e) => {
    // const from = document.getElementById('formsub')
    // const tbodyel = document.getElementById("tbody")
    // const tableel = document.getElementById("bedtable")
    // e.preventDefault();
    // const website = bedtype;
    // const count = bedquantity;
    // tbodyel.innerHTML += `
     // <tr>
     // <td>${website}</td>
     // <dl>${count}</dl>
     // <th><button class="deletebtn" >Remove</button></th>
     // </tr>`;
     // $(document).on('click', '.deletebtn', function (e) {
      // e.preventDefault();
      // $(e.target).closest('tr').remove();
    // })
    // console.log(tbodyel,'..............')
    // var myTableArray = [];
    // var arrayOfThisRow = [];
// $("table#bedtable tr").each(function() {
   
    // var tableData = $(this).find('td');
    // var tableData1 = $(this).find('dl');
    // if (tableData.length > 0) {
        // tableData.each(function() { arrayOfThisRow.push($(this).text()); });
        // myTableArray.push(arrayOfThisRow);
    // }
    
    // if (tableData1.length > 0) {
        // tableData1.each(function() { arrayOfThisRow.push($(this).text()); });
        // myTableArray.push(arrayOfThisRow);
    // }
    
// }
  
// );
// console.log("pppppppppppppppp",arrayOfThisRow)
  }
  const GetPropertyById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}properties/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setGetHtoelInformation(jsonPrser.data.data)
        setPropertyName(jsonPrser.data.data.property_name)
        setids(jsonPrser.data.data.id)
        setTitle(jsonPrser.data.data.title)
        setShortDescription(jsonPrser.data.data.description)
        setPropertyNo(jsonPrser.data.data.prop_reg)
        setLocation(jsonPrser.data.data.location)
        setLandmarks(jsonPrser.data.data.land_mark)
        setStartDate(jsonPrser.data.data.start_date)
        setEndDate(jsonPrser.data.data.end_data)
        setStartDate(jsonPrser.data.data.start_date)
        setStartDate(jsonPrser.data.data.full_day_price)
        setPropertyType(jsonPrser.data.data.property_type)
        setRoomtype(jsonPrser.data.data.room_type)
        setPrice(jsonPrser.data.data.pricing)
        toggle5(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  const GetPropertyDeal = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(`${common.api_url}properties/${id}`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setGetHtoelInformation(jsonPrser.data.data)
        setPropertyName(jsonPrser.data.data.property_name)
        setids(jsonPrser.data.data.id)
        setTitle(jsonPrser.data.data.title)
        setShortDescription(jsonPrser.data.data.description)
        setPropertyNo(jsonPrser.data.data.prop_reg)
        setLocation(jsonPrser.data.data.location)
        setStartDate(jsonPrser.data.data.start_date)
        setEndDate(jsonPrser.data.data.end_data)
        setLandmarks(jsonPrser.data.data.land_mark)
        setPropertyType(jsonPrser.data.data.property_type)
        setRoomtype(jsonPrser.data.data.room_type)
        setPrice(jsonPrser.data.data.pricing)
        setState(jsonPrser.data.data.state)
        setCity(jsonPrser.data.data.city)
        setCountries(jsonPrser.data.data.country)
        setAddress(jsonPrser.data.data.address)
        setnobathroom(jsonPrser.data.data.numb_of_bathroom)
        setmusiclocation(jsonPrser.data.data.prop_live_music_location)
        settoilets(jsonPrser.data.data.numb_of_toilet)
        setModalIsOpen(true)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });
  }


  const UpdatePropertyById = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    let payload = {
      title: title,
      property_name: propertyName,
      description: ShortDescription,
      prop_reg: PropertyNo,
      land_mark: Landmark,
      location: Location,
      pricing: Price,
      // half_day_price: HalfDayPrice,
      // full_day_price: FullDayPrice,
      property_type: PropertyType,
      room_only_listing: checkTogglebed,
      room_type: PropertyType,
     // image: Image
    }
    axios.put(`${common.api_url}properties/${ids}`, payload, config)
      .then(res => {
        if (res) {
          toggle5(false);
          getData();
          swal("Pub Updated Successfully!", "success");
          return res.data.data;
        }
      }).catch(err => {
        console.log(err);
      })
  }
  const getpolicy = (id) => {
    let token = localStorage.getItem("key");
    var token1 = token.replace(/"/g, "");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token1}`
      }
    };
    axios.get(` http://codestarc.com/client/newproject/api/getCatogeryToCancelPolicy`, config).then((response) => {
      let dataJson = JSON.stringify(response);
      let jsonPrser = JSON.parse(dataJson);
      if (jsonPrser.status == 200) {
        setpolciyInformationn(jsonPrser.data.data)
      }
    }).catch((error) => {
      console.log(error, 'errror');
    });

  }
  
// // disable the list of custom dates
// const customDates = ['2020-04-08', '2020-04-04', '2020-04-02'];
// const disableCustomDt = current => {
//   return !customDates.includes(current.format('YYYY-MM-DD'));
// }

  const token = localStorage.getItem("token")

  let role = localStorage.getItem("role");
  let isLoggedIn = localStorage.getItem("IsLoggedIn");
  if (role && isLoggedIn) {
    if (loader == true) {
      return (
        <Fragment>
          <LoaderClass className="loader_position" />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Properties</h1>
                  </div>
                  <div className="col-sm-6" >
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><Button className="m-2" color="second" data-toggle="modal" onClick={toggle3} >
                        Add Property
                      </Button>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <table id="example1" className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Sl</th>
                            <th>Action</th>
                            <th>Property Name</th>
                            <th>Total Rooms</th>
                            <th>Country Name</th>
                            <th>Price</th>
                            <th>Title</th>
                            <th>Publish deal</th>
                          </tr>
                        </thead>
                        {list.map((data, index) =>
                          <tbody key={index}>
                            <tr>
                              <td>{data.id}</td>
                              <td>  <FontAwesomeIcon
                                icon={['far', 'edit']}
                                className="font-size-xxl"
                                placement="top"
                                style={{ fontSize: 15, color: '#0AEE23' }}
                                onClick={() => GetPropertyById(data.id)}
                                id="tooltipforedit"
                                outline={data.id} />
                                <UncontrolledTooltip
                                  placement="top"
                                  container="body"
                                  target="tooltipforedit">
                                  edit
                                </UncontrolledTooltip>&nbsp;
                                <FontAwesomeIcon
                                  icon={['far', 'trash-alt']}
                                  className="font-size-xxl"
                                  placement="top"
                                  style={{ fontSize: 15, color: '#EE180A ' }}
                                  id="tooltipfordelete"
                                  outline={data.id} onClick={() => viewForDeleteData(data.id)} />
                                <UncontrolledTooltip
                                  placement="top"
                                  container="body"
                                  target="tooltipfordelete">
                                  delete
                                </UncontrolledTooltip>&nbsp;
                                <FontAwesomeIcon
                                  icon={['far', 'eye']}
                                  className="font-size-xxl"
                                  placement="top"
                                  style={{ fontSize: 15, color: '#0710CD ' }}
                                  id="tooltipforview" onClick={() => viewData(data.id)}
                                  outline={data.id} /> <UncontrolledTooltip
                                  placement="top"
                                  container="body"
                                  target="tooltipforview">
                                  view
                                </UncontrolledTooltip></td>
                              <td>{data.property_name}</td>
                              <td>{data.total_rooms}</td>
                              <td >{data.get_countries[0].name}</td>
                              <td>{data.pricing}</td>
                              <td>{data.title}</td>
                              <td><Button onClick={() => GetPropertyDeal(data.id)}>Publish deal</Button></td>
                              {/* edit section for hotel */}
                              <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal5} toggle={toggle5}>
                                <ModalHeader toggle={toggle5}>Edit Property</ModalHeader>
                                <ModalBody>
                                  <Form>
                                    <FormGroup row>
                                      <Label htmlFor="exampleEmail" sm={1}>Property Name
                                      </Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="propertyName"
                                          placeholder="Property Name"
                                          id="PropertyName"
                                          defaultValue={gethotelInformation.property_name}
                                          value={propertyName}
                                          onChange={e => setPropertyName(e.target.value)}
                                        />

                                      </Col>
                                      <Label htmlFor="exampleTitle" sm={1}>Title</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="Title"
                                          defaultValue={gethotelInformation.title}
                                          value={title}
                                          onChange={e => setTitle(e.target.value)}
                                        />
                                      </Col>
                                      <Label htmlFor="listing_type" sm={1}>Listing Types</Label>

                                      <Col sm={3}>
                                        <CustomInput
                                          type="select"
                                          name="customSect"
                                          id="listing_types_1"
                                          value={listing.id}
                                          onChange={e => setListings(e.target.value)}
                                          required
                                        >

                                          <option >Select Listing Types</option>
                                          {listing.map((data, index) =>
                                            <option key={index} value={data.id}>{data.title}</option>
                                          )};

                                        </CustomInput>
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label htmlFor="countries" sm={1}>
                                        Countries
                                      </Label>
                                      <Col sm={3}>
                                        <CustomInput
                                          type="select"
                                          id="countries_1"
                                          name="customSect"
                                          value={country.id}
                                          onClick={e => getStates(e.target.value)}
                                          onChange={e => setCountries(e.target.value)}
                                          >
                                          <option >Select Country</option>
                                          {country.map((data, index) =>
                                            <option key={index} value={data.id}>{data.name}</option>
                                          )};
                                        </CustomInput>
                                      </Col>
                                      <Label htmlFor="examplePropertyName" sm={1}>State</Label>
                                      <Col sm={3}>
                                        <CustomInput
                                          type="select"
                                          id="select_state"
                                          name="customSelect" value={state.id}
                                          onClick={e => getCities(e.target.value)}
                                          onChange={e => setState(e.target.value)}>
                                          <option >Select states</option>
                                          {state.map((data, index) =>
                                            <option key={index} value={data.id}>{data.name}</option>
                                          )};
                                        </CustomInput>
                                      </Col>
                                      <Label htmlFor="examplePropertyName" sm={1}>City</Label>
                                      <Col sm={3}>
                                        <CustomInput
                                          type="select"
                                          name="customSelect" value={city.id}
                                          id="select_city_1"
                                          onChange={e => setCity(e.target.value)}>
                                          <option >Select Cities</option>
                                          {city.map((data, index) =>
                                            <option key={index} value={data.id}>{data.name}</option>
                                          )};
                                        </CustomInput>
                                      </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                      <Label htmlFor="examplePropertyName" sm={1}>Property No.</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="number"
                                          name="title"
                                          id="title"
                                          placeholder="enter the property name  "
                                          defaultValue={gethotelInformation.prop_reg}
                                          value={PropertyNo}
                                          onChange={e => setPropertyNo(e.target.value)}
                                        />
                                      </Col>
                                      <Label htmlFor="examplePropertyName" sm={1}>Landmark</Label>
                                      <Col sm={3}>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="title"
                                          defaultValue={gethotelInformation.land_mark}
                                          value={Landmark}
                                          onChange={e => setLandmarks(e.target.value)}
                                        />
                                      </Col>
                                      <Label htmlFor="add_location" sm={1}>Location</Label>
                                      <Col sm={3}>
                                        <CustomInput
                                          type="select"
                                          id="add_location"
                                          name="customSelect"
                                          value={Location}
                                          onChange={e => setLocation(e.target.value)}
                                        >
                                          <option >Select Location</option>
                                          <option >North</option>
                                          <option>South</option>
                                          <option>East</option>
                                          <option>West</option>
                                          <option>Central</option>
                                        </CustomInput>
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Label htmlFor="exampleTitle" sm={1}>ShortDescription</Label>
                                      <Col sm={3}>
                                        <Input type="textarea"
                                          name="ShortDescription"
                                          id="exampleText"
                                          defaultValue={gethotelInformation.description}
                                          value={ShortDescription}
                                          onChange={e => setShortDescription(e.target.value)} />
                                      </Col>
                                      <Label htmlFor="exampleTitle" sm={1}>Price</Label>
                                      <Col sm={3}>
                                        <Input type="number"
                                          name="price"
                                          id="price"
                                          defaultValue={gethotelInformation.pricing}
                                          value={Price}
                                          onChange={e => setPrice(e.target.value)} />
                                      </Col>

                                      <Label htmlFor="personCapacity" sm={1}>Image</Label>
                                        <Col sm={3}>
                                          <Input
                                            type="file"
                                            id="filename"
                                            name="images"
                                            multiple
                                            onChange={handleFileChange}
                                          />
                                          </Col>
                                    </FormGroup>
                                    {/* <FormGroup row>
                                    <Label htmlFor="personCapacity" sm={1}>End deal</Label>
                                   <Col sm={4}>
                                    <DatePicker
                                id="datestartpicker"
                                placeholderText="Select Start Date"
                                showTimeSelect
                                dateFormat="MMMM d, yyyy h:mmaa"
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                onChange={date => setStartDate(date)}
                              />
                            </Col>
                            <Label htmlFor="personCapacity" sm={1}>End deal</Label>
                            <Col sm={4}>
                              <DatePicker
                                id="dateendpicker"
                                placeholderText="Select End Date"
                                showTimeSelect
                                dateFormat="MMMM d, yyyy h:mmaa"
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                onChange={date => setEndDate(date)}
                              />
                            </Col>
                        </FormGroup> */}

                                  </Form>
                                </ModalBody>
                                <ModalFooter>
                                  <Button color="primary" className="ml-auto" onClick={() => UpdatePropertyById(data.id)}>
                                    Update
                                  </Button>
                                </ModalFooter>
                              </Modal>
                              {/* edit section  finish here */}
                            </tr>
                          </tbody>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Modal zIndex={2000} className="custom_model_size" isOpen={modal2} toggle={toggle2}>
            <ModalHeader toggle={toggle2}>Information Of Property</ModalHeader>
            <ModalBody className="text-center">
              <Form>
                <FormGroup row>
                  <Label className='view_head' htmlFor="exampleEmail" sm={1}>Property Name :
                  </Label>
                  <Col sm={3}>
                    {hotelInformation.property_name}

                  </Col>
                  <Label className='view_head' htmlFor="exampleTitle" sm={1}>Title :</Label>
                  <Col sm={3}>
                    {hotelInformation.title}
                  </Col>
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Listing Types :
                  </Label>
                  <Col sm={3}>
                    {gethotelInformationListing.title ?
                      gethotelInformationListing.title
                      : ('Null')}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label className='view_head' htmlFor="exampleText" sm={1}>How many bedroom(s) does your property have on this listing?</Label>
                  <Col sm={3}>
                    {hotelInformation.total_rooms ?
                      hotelInformation.total_rooms
                      : ('Null')}

                  </Col>

                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>Floor :
                  </Label>
                  <Col sm={3}>
                    {hotelInformation.floor ?
                      hotelInformation.floor
                      : ('Null')}


                  </Col>
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>Star Ratings : </Label>
                  <Col sm={3}>
                    {hotelInformation.star_rating ?
                      hotelInformation.star_rating
                      : ('Null')}

                  </Col>
                </FormGroup>



                <FormGroup row>
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>
                    Countries :
                  </Label>
                  <Col sm={3}>

                    {gethotelInformationCountry.name ?
                      gethotelInformationCountry.name
                      : ('Null')}
                  </Col>
                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>State :</Label>
                  <Col sm={3}>

                    {gethotelInformationState.name ?
                      gethotelInformationState.name
                      : ('Null')}
                  </Col>
                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>City :</Label>
                  <Col sm={3}>

                    {gethotelInformationCity.name ?
                      gethotelInformationCity.name
                      : ('Null')}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>Property No. :</Label>
                  <Col sm={3}>

                    {hotelInformation.prop_reg ?
                      hotelInformation.prop_reg
                      : ('Null')}
                  </Col>
                  <Label className='view_head' htmlFor="examplePropertyName" sm={1}>Landmark :</Label>
                  <Col sm={3}>

                    {hotelInformation.land_mark ?
                      hotelInformation.land_mark
                      : ('Null')}
                  </Col>
                  <Label className='view_head' htmlFor="exampleCustomMutlipleSelect" sm={1}>Location :</Label>
                  <Col sm={3}>

                    {hotelInformation.location ?
                      hotelInformation.location
                      : ('Null')}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label className='view_head' htmlFor="exampleTitle" sm={1}>ShortDescription :</Label>
                  <Col sm={3}>

                    {hotelInformation.description ?
                      hotelInformation.description
                      : ('Null')}

                  </Col>
                  <Label className='view_head' htmlFor="exampleFile" sm={1}>Image :</Label>
                  <Col sm={3}>
                    <img src='https://www.w3schools.com/w3images/team2.jpg' width='25%' alt="hotel-image" />
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle2}>
                Close
              </Button>{' '}
            </ModalFooter>
          </Modal>
          <Modal zIndex={2000} centered size="sm" isOpen={modal4} toggle={toggle4}>
            <ModalHeader toggle={toggle4}>Delete Property</ModalHeader>
            <ModalBody className="text-center">
              <img src={hotelInformation.image} alt="hotel-image" />
              <p>Are you Really Want To Delete {hotelInformation.property_name}?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle4}>
                Close
              </Button>{' '}
              <Button color="primary" className="ml-auto" onClick={() => removeData(hotelInformation.id)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
          <Modal zIndex={2000} centered className="custom_model_size" isOpen={modal3} toggle={toggle3} backdrop="static" keyboard={false}>
            <ModalHeader toggle={toggle3}><p className="property_head">Let’s get started..</p></ModalHeader>
            <ModalBody>
              <Form>

                <FormGroup row>
                  <Label htmlFor="exampleEmail" sm={1}>Property Name
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="propertyName"
                      id="PropertyName"
                      required="required"
                      placeholder='Hotel Name, Resort Name, Hostel Name etc…'
                      value={propertyName}
                      onChange={e => setPropertyName(e.target.value)}
                      // onchangel={}
                      required
                    />
                    {pronameError != '' ? (
                      <Label style={{ color: "red" }}>
                        {pronameError}
                      </Label>
                    ) : null}

                  </Col>

                  <Label htmlFor="exampleTitle" sm={1}>Title</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="title"
                      id="Title"
                      placeholder='Impressive 2 bedroom villa with Seaview! 10 min walk  from the beautiful beaches'
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      required
                    />
                    {TitleError != '' ? (
                      <Label style={{ color: "red" }}>
                        {TitleError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="listing_types_1" sm={1}>
                    Property Type
                  </Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      name="customSect"
                      id="listing_types_if_shared"
                      value={PropertyType}
                      onChange={e => setPropertyType(e.target.value)}
                      required
                    >
                      <option>Select</option>
                      <option>Private</option>
                      <option>Shared</option>
                    </CustomInput>
                    {TypeError != '' ? (
                      <Label style={{ color: "red" }}>
                        {TypeError}
                      </Label>
                    ) : null}
                  </Col>

                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="listing_types_1" sm={1}>
                    What are you listing today
                  </Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      name="customSect"
                      id="listing_types_1"
                      value={listing.id}
                      onChange={e => setListings(e.target.value)}
                      required
                    >
                      <option >Select Listing Types</option>
                      {listing.map((data, index) =>
                        <option key={index} value={data.id}>{data.title}</option>
                      )}

                    </CustomInput>
                    {ListingError != '' ? (
                      <Label style={{ color: "red" }}>
                        {ListingError}
                      </Label>
                    ) : null}
                  </Col>

                  <Label htmlFor="add_floor" sm={1}>Floor</Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      id="add_floor"
                      name="customSelect"
                      value={Floor.id}
                      onChange={e => setFloor(e.target.value)}
                    >
                      <option >Select Floor Types</option>
                      {flooroptions.map((data, index) =>
                        <option key={index} value={data.id}>{data.label}</option>
                      )};
                    </CustomInput>
                    {FloorError != '' ? (
                      <Label style={{ color: "red" }}>
                        {FloorError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="add_star_rate" sm={1}>Star Ratings </Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      id="add_star_rate"
                      name="customSelect"
                      value={StarRatings}
                      onChange={e => setStarRatings(e.target.value)}
                    >
                      <option >Select</option>
                      <option >1</option>
                      <option >2</option>
                      <option >3</option>
                      <option >4</option>
                      <option >5</option>
                      <option >N/A</option>
                    </CustomInput>
                    {RatingsError != '' ? (
                      <Label style={{ color: "red" }}>
                        {RatingsError}
                      </Label>
                    ) : null}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="countries_1" sm={1}>
                    Countries
                  </Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      id="countries_1"
                      name="customSect"
                      value={country.id}
                      onClick={e => getStates(e.target.value)}
                      onChange={e => setCountries(e.target.value)}

                    >
                      <option >Select Country</option>
                      {country.map((data, index) =>
                        <option key={index} value={data.id}>{data.name}</option>
                      )};
                    </CustomInput>
                    {CountriesrError != '' ? (
                      <Label style={{ color: "red" }}>
                        {CountriesrError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="examplePropertyName" sm={1}>State</Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      name="customSelect"
                      name="customSelect"
                      value={state.id}
                      id="select_state_1"
                      onClick={e => getCities(e.target.value)}
                      onChange={e => setState(e.target.value)}>
                      <option >Select states</option>
                      {state.map((data, index) =>
                        <option key={index} value={data.id}>{data.name}</option>
                      )};
                    </CustomInput>
                    {StateError != '' ? (
                      <Label style={{ color: "red" }}>
                        {StateError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="examplePropertyName" sm={1}>City</Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      name="customSelect" value={city.id}
                      id="select_city_1"
                      onChange={e => setCity(e.target.value)}>
                      <option >Select Cities</option>
                      {city.map((data, index) =>
                        <option key={index} value={data.id}>{data.name}</option>
                      )};
                    </CustomInput>
                    {CityError != '' ? (
                      <Label style={{ color: "red" }}>
                        {CityError}
                      </Label>
                    ) : null}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="examplePropertyName" sm={1}>Property No.</Label>
                  <Col sm={3}>
                    <Input
                      type="number"
                      name="title"
                      id="title"
                      value={PropertyNo}
                      onChange={e => setPropertyNo(e.target.value)}
                    />
                    {PropNOError != '' ? (
                      <Label style={{ color: "red" }}>
                        {PropNOError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="examplePropertyName" sm={1}>Landmark</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      value={Landmark}
                      onChange={e => setLandmarks(e.target.value)}
                    />
                    {landmarkError != '' ? (
                      <Label style={{ color: "red" }}>
                        {landmarkError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="property_location" sm={1}>Location</Label>
                  <Col sm={3}>
                    <CustomInput
                      type="select"
                      id="property_location"
                      name="customSelect"
                      value={Location}
                      onChange={e => setLocation(e.target.value)}
                    >
                      <option >select location</option>
                      <option >North</option>
                      <option>South</option>
                      <option>East</option>
                      <option>West</option>
                      <option>Central</option>
                    </CustomInput>
                    {LocationError != '' ? (
                      <Label style={{ color: "red" }}>
                        {LocationError}
                      </Label>
                    ) : null}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="exampleTitle" sm={1}>ShortDescription</Label>
                  <Col sm={5}>
                    <Input type="textarea"
                      name="ShortDescription"
                      id="exampleText"
                      placeholder="Cozy Double Bed with a beautiful.. Located on the top floor of our family home, this magnificent apartment offers an experience combining comfort, authenticity and a breathtaking view! You have two air-conditioned bedrooms as well as the best wifi money can buy in Mauritius (100Mbps fiber), laptop desk area, and a beautiful terrace with kitchen and outdoor lounge, shared swimming pool. Several activities are nearby such as kitesurfing, windsurfing, wakeboarding, horseback riding, Chamarel, Casela park, swimming with dolphins … "
                      value={ShortDescription}
                      onChange={e => setShortDescription(e.target.value)} required />
                    {DiscriptionError != '' ? (
                      <Label style={{ color: "red" }}>
                        {DiscriptionError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label htmlFor="exampleTitle" sm={1}>Price</Label>
                  <Col sm={3}>
                    <Input type="number"
                      name="Price"
                      id="Price"
                      value={Price}
                      onChange={e => setPrice(e.target.value)} required />
                    {PriceError != '' ? (
                      <Label style={{ color: "red" }}>
                        {PriceError}
                      </Label>
                    ) : null}
                  </Col>
               </FormGroup>
                <FormGroup row>
                  <Label htmlFor="hotelType" sm={1}>Address</Label>
                  <Col sm={3}>
                    <Input
                      type="text"
                      id="hotelType"
                      name="customSelect"
                      value={Address}
                      onChange={e => setAddress(e.target.value)}
                    />
                    {AdressError != '' ? (
                      <Label style={{ color: "red" }}>
                        {AdressError}
                      </Label>
                    ) : null}
                  </Col>
                  <Label sm={2}>Image</Label>
                  <Col sm={3}>
                    <Input
                      type="file"
                      id="filename"
                      name="images"
                      multiple
                      onChange={handleFileChange}
                    />
                  </Col>
                </FormGroup>
                  <FormGroup row>
                  <Label htmlFor="exampleTitle" sm={4}>Do you want to add bedroom(s) to your listing?</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglebed}
                      onChange={e => setCheckTogglebed(checkTogglebed == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                {checkTogglebed == true ? (
                  <>
                    <span className="main_room_div">
                      <Card className="clone_my_room">
                        <CardBody>
                          <FormGroup row>
                            <Label htmlFor="exampleTitle" sm={1}>Is this a Room Only listing?</Label>
                            <Col sm={3}>
                              <CheckboxToggle
                                value={checkToggle}
                                onChange={e => setCheckToggle(checkToggle == false ? true : false)}
                              />
                            </Col>
                            {checkToggle == true ? (
                              <>
                                <Label htmlFor="room_types_if_shared" sm={1}>
                                  Is the room Private or Shared?
                                </Label>
                                <Col sm={3}>
                                  <CustomInput
                                    type="select"
                                    name="customSect"
                                    id="room_types_if_shared"
                                    value={PropertyType}
                                    onChange={e => setPropertyType(e.target.value)}
                                    required
                                  >
                                    <option>Select</option>
                                    <option>Private</option>
                                    <option>Shared</option>
                                  </CustomInput>
                                </Col>
                              </>
                            ) : ''}
                            <Label htmlFor="bedroom_count" sm={1}>How many bedroom(s) does your property have on this listing?</Label>
                            <Col sm={3}>
                              <Input
                                type="number"
                                id="bedroom_count"
                                name="bedroom_count"
                                value={TotalRooms}
                                onChange={e => setTotalRooms(e.target.value)}
                              />
                              {RoomError != '' ? (
                                <Label style={{ color: "red" }}>
                                  {RoomError}
                                </Label>
                              ) : null}
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="room_size" sm={1}>Room Size</Label>
                            <Col sm={3}>
                              <CustomInput
                                type="select"
                                id="room_size"
                                name="room_size"
                                value={Roomsize}
                                onChange={e => setRoomsize(e.target.value)}>
                                <option value=''>Select Room Size in</option>
                                {roomsizeOptions.map((data, index) =>
                                  <option key={index} value={data.value}>{data.label}</option>
                                )};
                              </CustomInput>
                            </Col>
                            {Roomsize == '1' ? (
                              <>
                                <Col sm={2}>
                                  <Input
                                    type="number"
                                    id="room_x_dimensions"
                                    name="room_x_dimensions" placeholder="X dimensions"
                                  />
                                </Col>
                                <Col sm={2}>
                                    <Input
                                    type="number"
                                    id="room_y_dimensions"
                                    name="room_y_dimensions" placeholder="Y dimensions"
                                  />
                                </Col>
                              </>
                            ) : ''}
                            {Roomsize == '2' ? (
                              <>
                                <Col sm={2}>

                                  <Input
                                    type="number"
                                    id="room_x_dimensions"
                                    name="room_x_dimensions" placeholder="X dimensions"
                                  />
                                </Col>
                                <Col sm={2}>
                                  <Input
                                    type="number"
                                    id="room_y_dimensions"
                                    name="room_y_dimensions" placeholder="Y dimensions"
                                  />
                                </Col>
                              </>
                            ) : ''}

                            <Label htmlFor="room_number" sm={1}>Room Number</Label>
                            <Col sm={3}>
                              <Input
                                type="number"
                                id="room_number"
                                name="room_number"
                                value={RoomNumber}
                                onChange={e => setRoomNumber(e.target.value)}
                              >
                              </Input>
                            </Col>
                            <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>Roomtype</Label>
                            <Col sm={3}>
                              <CustomInput
                                type="select"
                                name="customSect"
                                id="customSect1"
                                value={Roomtype}
                                onChange={e => setRoomtype(e.target.value)}>
                                <option >Select Roomtype</option>
                                {roomOptions.map((data, index) =>
                                  <option key={index} value={data.value}>{data.label}</option>
                                )};
                              </CustomInput>
                            </Col>
                          </FormGroup>
                          <Form id="formsub">
                            <FormGroup row>
                              <Label htmlFor="exampleTitle" sm={1}>BedType</Label>
                              <Col sm={2}>
                                <CustomInput
                                  type="select"
                                  id="bedtype"
                                  name="bedtype"
                                  value={bedtype}
                                  onChange={e => setBedtypes(e.target.value)}>
                                  <option >Select View Type</option>
                                  {bedOptions.map((data, index) =>
                                    <option key={index} value={data.lable}>{data.label}</option>
                                  )};
                                </CustomInput>
                              </Col>
                              <Label htmlFor="exampleTitle" sm={1}>BedType</Label>
                              <Col sm={2}>
                                <Input
                                  type="number"
                                  id="bedquantity"
                                  name="bedquantity"
                                  value={bedquantity}
                                  onChange={e => setbedquantity(e.target.value)}
                                />
                              </Col>
                              <Col sm={2}>
                                <Button color="primary" className="ml-auto" onClick={AddMOreBedType} type="button">Add</Button>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col sm={6}>
                              <div>
                              <table id="bedtable" className=" table table-bordered table-striped">
                              <tbody id="tbody">
                              </tbody>
                             </table>
                              </div>
                              </Col>
                            </FormGroup>
                          </Form>
                          <FormGroup row>
                            <Label htmlFor="exampleCustomMutlipleSelect" sm={1}>ViewType</Label>
                            <Col sm={3}>
                              <CustomInput
                                type="select"
                                name="customSect"
                                id="customSect3"
                                value={viewtype}
                                onChange={e => setViewtypes(e.target.value)}>
                                <option >Select View Type</option>
                                {ViewOptions.map((data, index) =>
                                  <option key={index} value={data.value}>{data.label}</option>
                                )};
                              </CustomInput>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label sm={1}>You can accommodate</Label>
                            <Col sm={3}>
                              <Input
                                type="number"
                                id="people_accomodate"
                                name="people_accomodate"
                                placeholder="for e.g 2 people"
                                value={accommodate}
                                onChange={e => setaccommodate(e.target.value)}
                              />
                            </Col>
                            <Label htmlFor="exampleTitle" sm={1}>Does the Room have a Balcony?</Label>
                            <Col sm={3}>
                              <CheckboxToggle
                                value={checkTogglebalcony}
                                onChange={e => setCheckTogglebalcony(checkTogglebalcony == false ? true : false)}
                              />
                            </Col>
                            <Label htmlFor="exampleTitle" sm={1}>The room comes with en Suite?</Label>
                            <Col sm={3}>
                              <CheckboxToggle
                                value={checkTogglesuite}
                                onChange={e => setCheckTogglesuite(checkTogglesuite == false ? true : false)}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="exampleTitle" sm={1}>Does the room have Disability Access?</Label>
                            <Col sm={3}>
                              <CheckboxToggle
                                value={checkToggledisability}
                                onChange={e => setCheckToggledisability(checkToggledisability == false ? true : false)}
                              />
                            </Col>
                            <Label htmlFor="MiniBar" sm={2}>Mini Bar is included with this Listing:</Label>
                            <Col sm={2}>
                              <CheckboxToggle
                                value={checkToggleminibar}
                                onChange={e => setCheckToggleminibar(checkToggleminibar == false ? true : false)}
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label className="my_label" sm={3}>The room has following facilities:</Label>
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="personCapacity" sm={3}>The room is equipped with:</Label>
                            <Col sm={3}>
                              <Select
                                className="dropdownbed"
                                placeholder="Select Option"
                                value={EquipmentOptions.filter(obj => roomequipped.includes(obj.value))} // set selected values
                                options={EquipmentOptions} // set list of technology Facilitieshe data
                                onChange={handleEquipped} // assign onChange functioAddmoreOptions
                                isMulti
                                isClearable
                              />
                            </Col>
                            {isMoreBtnquipped == true ? (
                              <>
                                <Label htmlFor="FreeActivity" sm={1}></Label>
                                <Col sm={2}>
                                  <Input type="text"
                                    name="roomequipped"
                                    id="roomequipped"
                                    value={quipped}
                                    onChange={e => setquipped(e.target.value)}
                                  />
                                </Col>
                                <Button type="button" onClick={() => AddmoreOptionsquipped(freeactivity)}>Add</Button>
                              </>
                            ) : ''}
                            <Label htmlFor="personCapacity" sm={3}>Room Facilities</Label>
                            <Col sm={3}>
                              <Select
                                className="dropdownbed"
                                placeholder="Select Option"
                                value={facilityOptions.filter(obj => roomeFacilities.includes(obj.value))} // set selected values
                                options={facilityOptions} // set list of the data
                                onChange={handleFacilities} // assign onChange functioAddmoreOptions
                                isMulti
                                isClearable
                              />
                            </Col>
                            {isMoreBtnFacilities == true ? (
                              <>
                                <Label htmlFor="FreeActivity" sm={1}></Label>
                                <Col sm={2}>
                                  <Input type="text"
                                    name="roomequipped"
                                    id="roomequipped"
                                    value={Facilities}
                                    onChange={e => setFacilities(e.target.value)}
                                  />
                                </Col>
                                <Button type="button" onClick={() => AddmoreOptionsFacilities(Facilities)}>Add</Button>
                              </>
                            ) : ''}
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="personCapacity" sm={3}>Technology Facilities</Label>
                            <Col sm={3}>
                              <Select
                                className="dropdownbed"
                                placeholder="Select Option"
                                value={otherFacilityOptions.filter(obj => otherFacilities.includes(obj.value))} // set selected values
                                options={otherFacilityOptions} // set list of the data
                                onChange={handleotherFacilities} // assign onChange functioAddmoreOptions
                                isMulti
                                isClearable
                              />
                            </Col>
                            {isMoreBtnTechnology == true ? (
                              <>
                                <Label htmlFor="FreeActivity" sm={1}></Label>
                                <Col sm={2}>
                                  <Input type="text"
                                    name="roomequipped"
                                    id="roomequipped"
                                    value={Technology}
                                    onChange={e => setTechnology(e.target.value)}
                                  />
                                </Col>
                                <Button type="button" onClick={() => AddmoreOptionsTechnology(Technology)}>Add</Button>
                              </>
                            ) : ''}

                            <Label htmlFor="hotelType" sm={3}>Food & Drink Facilities</Label>
                            <Col sm={3}>
                              <Select
                                className="dropdownbed"
                                placeholder="Select Option"
                                value={foodOptions.filter(obj => foodOptionstypes.includes(obj.value))} // set selected values
                                options={foodOptions} // set list of the data
                                onChange={handlefoodOptionstypes} // assign onChange functioAddmoreOptions
                                isMulti
                                isClearable
                              />
                            </Col>
                            {isMoreBtnFood == true ? (
                              <>
                                <Label htmlFor="FreeActivity" sm={1}></Label>
                                <Col sm={2}>
                                  <Input type="text"
                                    name="roomequipped"
                                    id="roomequipped"
                                    value={Food}
                                    onChange={e => setFood(e.target.value)}
                                  />
                                </Col>
                                <Button type="button" onClick={() => AddmoreOptionsFood(Food)}>Add</Button>
                              </>
                            ) : ''}
                          </FormGroup>
                        </CardBody>
                        <Row> <Col sm={3}> <a href="#" className="delete_room ml-auto btn btn-primary">Delete Room</a></Col></Row>
                        <br />
                      </Card>
                      <br />
                    </span>
                    <br />
                    <FormGroup row>
                      <Col sm={3}><a href="#" id="addMore" className="ml-auto btn btn-primary">Duplicate Room</a></Col>
                    </FormGroup>
                  </>
                ) : ''}
                <br />
                <FormGroup row>
                  <Label htmlFor="bathrooms" sm={3}>Number of Bathroom: </Label>
                  <Col sm={3}>
                    <Input
                      type="number"
                      id="bathrooms"
                      name="room_xy_dimensions"
                      value={nobathroom}
                      onChange={e => setnobathroom(e.target.value)}
                    />
                  </Col>
                  <Label htmlFor="toilets" sm={3}>Number of Toilet: </Label>
                  <Col sm={3}>
                    <Input
                      type="number"
                      id="toilets"
                      name="toilets"
                      value={toilets}
                      onChange={e => settoilets(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="exampleTitle" sm={3}>The property has a swimming pool?</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglepool}
                      onChange={e => setCheckTogglepool(checkTogglepool == false ? true : false)}
                    />
                  </Col>
                  {checkTogglepool == true ? (
                    <>
                      <Label htmlFor="exampleTitle" sm={3}>Is the pool Private or Shared?</Label>
                      <Col sm={3}>
                        <CustomInput
                          type="select"
                          id="is_room_shared"
                          name="customSelect"
                          value={poolType}
                          onChange={e => setpoolType(e.target.value)}
                        >
                          <option>Select</option>
                          <option>Private</option>
                          <option>Shared</option>
                        </CustomInput>
                      </Col>
                    </>
                  ) : ''}
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="exampleTitle" sm={1}>The property has a garden?</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglegarden}
                      onChange={e => setCheckTogglegarden(checkTogglegarden == false ? true : false)}
                    />
                  </Col>
                  {checkTogglegarden == true ? (
                    <>
                      <Label htmlFor="exampleTitle" sm={1}>Is the garden Private or Shared?</Label>
                      <Col sm={3}>
                        <CustomInput
                          type="select"
                          id="is_room_shared"
                          name="customSelect"
                          value={gardenType}
                          onChange={e => setgardenType(e.target.value)}
                        >
                          <option>Select</option>
                          <option>Private</option>
                          <option>Shared</option>
                        </CustomInput>
                      </Col>
                    </>
                  ) : ''}
                  <Label htmlFor="exampleTitle" sm={1}>The property have a Lounge?</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglelaunge}
                      onChange={e => setCheckTogglelaunge(checkTogglelaunge == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="exampleTitle" sm={4}>Is meal Included with this listing? </Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglefood}
                      onChange={e => setCheckTogglefood(checkTogglefood == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                {checkTogglefood == true ? (
                  <>
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={4}>Choose the meal type that you are offering with this listing : </Label>
                      <Col sm={6}>
                        <CustomInput
                          type="select"
                          name="which_meal_type"
                          id="which_meal_type"
                          value={mealtypeoffer}
                          onChange={e => setmealtypeoffer(e.target.value)}>
                          <option key='0' value=''>Select</option>
                          <option key='1' value='Breakfast only'>Breakfast only</option>
                          <option key='2' value='Half Board'>Half Board</option>
                          <option key='3' value='Full Board'>Full Board</option>
                          <option key='4' value='All Inclusive'>All Inclusive</option>
                        </CustomInput>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={4}>Please state if there are any allergens concerns in your food:</Label>
                      <Col sm={6}>
                        <Input type="textarea"
                          name="allergens "
                          id="allergens "
                          value={allergens}
                          onChange={e=>setAllergens(e.target.value)}
                          placeholder="For e.g Prepared/ Handled in a facility that handles  celery, cereals containing gluten (such as barley and oats), crustaceans (such as prawns, crabs and lobsters), eggs, fish, lupin, milk, molluscs (such as mussels and oysters), mustard, peanuts, sesame, soybeans, sulphur dioxide and sulphites Kosher food available, Gluten-free option available, lactose/ dairy-free, Vegan, Vegetarian food also available " />
                      </Col>
                    </FormGroup>
                    {mealtypeoffer == 'All Inclusive' ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="personCapacity" sm={1}>Start Deal</Label>
                          <Col sm={4}>
                            <DatePicker
                              id="datestartpicker"
                              placeholderText="Select Start Date"
                              showTimeSelect
                              dateFormat="MMMM d, yyyy h:mmaa"
                              selected={startDate}
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                              onChange={date => setStartDate(date)}
                            />
                          </Col>
                          <Label htmlFor="personCapacity" sm={1}>End deal</Label>
                          <Col sm={4}>
                            <DatePicker
                              id="dateendpicker"
                              placeholderText="Select End Date"
                              showTimeSelect
                              dateFormat="MMMM d, yyyy h:mmaa"
                              selected={endDate}
                              selectsEnd
                              startDate={startDate}
                              endDate={endDate}
                              minDate={startDate}
                              onChange={date => setEndDate(date)}
                            />
                          </Col>
                          <p className="title">Disable the list of custom dates: <small>(2020-04-08, 2020-04-04, 2020-04-02)</small></p>
                          <input type="text" name="desabledate" value="Select Date Here"/>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={10}>It includes the following options: </Label>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" className='my_label' sm={3}>Breakfast: </Label>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglebreak}
                          onChange={e => setCheckTogglebreak(checkTogglebreak == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglebreak == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={10}>Where are you offering the following: </Label>
                          <Label htmlFor="exampleTitle" sm={4}><b>Location</b></Label>
                          <Label htmlFor="exampleTitle" sm={4}><b>Opening Days</b></Label>
                          <Label htmlFor="exampleTitle" sm={4}><b>Starting and Closing Time</b></Label>

                        </FormGroup>
                        <FormGroup>
                            <Col sm={4}>
                              <Input
                                type="text"
                                name="location"
                                id="location"
                                value={footballLoc}
                                onChange={e => setfootballLoc(e.target.value)}
                              />
                            </Col>
                            {
                          LivelocationOpeningHours && LivelocationOpeningHours.map((item,index)=>(
                            <Row key={index}>
                              <Col sm={1}>
                                <input type="checkbox" value={item.value}  />
                              </Col>
                              <Col sm={3}>
                                <label>
                                  {item.label}
                                </label>
                              </Col>
                              <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  id="room_xy_dimensions"
                                  name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                                />
                              </Col>
                            </Row>

                          ))
                        }
                        </FormGroup>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={2}>Add any Comments</Label>
                          <Col sm={4}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="ShortDescription"
                              value={BasketCommets}
                              OnChange={e => setBasketCommets(e.target.value)}
                              placeholder="for e.g Dress code and Bar opening time" />
                          </Col>
                        </FormGroup>
                        <FormGroup className="add_my_new_info_meal">
                          <Button color="primary" className="ml-auto add_my_new_info_btn_meal">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}

                    {mealtypeoffer != 'Breakfast only' ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" className='my_label' sm={3}>Lunch: </Label>
                          <Col sm={3}>
                            <CheckboxToggle
                              value={checkTogglelunch}
                              onChange={e => setCheckTogglelunch(checkTogglelunch == false ? true : false)}
                            />
                          </Col>
                        </FormGroup>
                        {checkTogglelunch == true ? (
                          <>
                            <FormGroup row>

                              <Label htmlFor="exampleTitle" sm={4}><b>Location</b></Label>
                              <Label htmlFor="exampleTitle" sm={4}><b>Opening Days</b></Label>
                              <Label htmlFor="exampleTitle" sm={4}><b>Starting and Closing Time</b></Label>

                            </FormGroup>
                            <FormGroup>
                                <Col sm={4}>
                                  <Input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={lunchlocation}
                                    onChange={e => setlunchlocation(e.target.value)}
                                  />
                                </Col>
                                {
                          LivelocationOpeningHours && LivelocationOpeningHours.map((item,index)=>(
                            <Row key={index}>
                              <Col sm={1}>
                                <input type="checkbox" value={item.value}  />
                              </Col>
                              <Col sm={3}>
                                <label>
                                  {item.label}
                                </label>
                              </Col>
                              <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  id="room_xy_dimensions"
                                  name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                                />
                              </Col>
                            </Row>

                          ))
                            }     
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="exampleTitle" sm={2}>Add any Comments</Label>
                              <Col sm={4}>
                                <Input type="textarea"
                                  name="ShortDescription"
                                  id="exampleText"
                                  value={lunchcomment}
                                  onChange={e => setlunchcomment(e.target.value)}
                                  placeholder="for e.g Dress code and Bar opening time" />
                              </Col>
                            </FormGroup>
                            <FormGroup className="add_my_new_info_meal">
                              <Button color="primary" className="ml-auto add_my_new_info_btn_meal">
                                ADD LOCATION
                              </Button>
                            </FormGroup>
                          </>
                        ) : ''}

                        <FormGroup row>
                          <Label htmlFor="exampleTitle" className='my_label' sm={3}>Afternoon Tea: </Label>
                          <Col sm={3}>
                            <CheckboxToggle
                              value={checkToggletea}
                              onChange={e => setCheckToggletea(checkToggletea == false ? true : false)}
                            />
                          </Col>
                        </FormGroup>
                        {checkToggletea == true ? (
                          <>
                            <FormGroup row>

                              <Label htmlFor="exampleTitle" sm={4}><b>Location</b></Label>
                              <Label htmlFor="exampleTitle" sm={4}><b>Opening Days</b></Label>
                              <Label htmlFor="exampleTitle" sm={4}><b>Starting and Closing Time</b></Label>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={4}>
                                  <Input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={teaLocation}
                                    onChange={e => setteaLocation(e.target.value)}
                                  />
                                </Col>
                                {
                          LivelocationOpeningHours && LivelocationOpeningHours.map((item,index)=>(
                            <Row key={index}>
                              <Col sm={1}>
                                <input type="checkbox" value={item.value}  />
                              </Col>
                              <Col sm={3}>
                                <label>
                                  {item.label}
                                </label>
                              </Col>
                              <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  id="room_xy_dimensions"
                                  name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                                />
                              </Col>
                            </Row>

                            ))
                            }
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="exampleTitle" sm={2}>Add any Comments</Label>
                              <Col sm={4}>
                                <Input type="textarea"
                                  name="ShortDescription"
                                  id="exampleText"
                                  value={teacomment}
                                  onChange={e => setteacomment(e.target.value)}
                                  placeholder="for e.g Dress code and Bar opening time" />
                              </Col>
                            </FormGroup>
                            <FormGroup className="add_my_new_info_meal">
                              <Button color="primary" className="ml-auto add_my_new_info_btn_meal">
                                ADD LOCATION
                              </Button>
                            </FormGroup>
                          </>
                        ) : ''}
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" className='my_label' sm={3}>Dinner: </Label>
                          <Col sm={3}>
                            <CheckboxToggle
                              value={checkToggledinner}
                              onChange={e => setCheckToggledinner(checkToggledinner == false ? true : false)}
                            />
                          </Col>
                        </FormGroup>
                        {checkToggledinner == true ? (
                          <>
                            <FormGroup row>

                              <Label htmlFor="exampleTitle" sm={4}><b>Location</b></Label>
                              <Label htmlFor="exampleTitle" sm={4}><b>Opening Days</b></Label>
                              <Label htmlFor="exampleTitle" sm={4}><b>Starting and Closing Time</b></Label>

                            </FormGroup>
                            <form>
                            <FormGroup>
                                <Col sm={4}>
                                  <Input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={dennerlocation}
                                    onChange={e => setdennerlocation(e.target.value)}
                                  />
                                </Col>
                                {
                          LivelocationOpeningHours && LivelocationOpeningHours.map((item,index)=>(
                            <Row key={index}>
                              <Col sm={1}>
                                <input type="checkbox" value={item.value}  />
                              </Col>
                              <Col sm={3}>
                                <label>
                                  {item.label}
                                </label>
                              </Col>
                              <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  id="room_xy_dimensions"
                                  name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                                />
                              </Col>
                            </Row>

                          ))
                              }
                            </FormGroup>
                            <Button onClick={selectTime} id="dinnerButton">Add new</Button>
                            </form>
                            <FormGroup row>
                              <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                              <Col sm={3}>
                                <Input type="textarea"
                                  name="ShortDescription"
                                  id="exampleText"
                                  value={dennercomment}
                                  onChange={e => setdennercomment(e.target.value)}
                                  placeholder="for e.g Dress code and Bar opening time" />
                              </Col>
                            </FormGroup>
                            <FormGroup className="add_my_new_info_meal">
                              <Button color="primary" className="ml-auto add_my_new_info_btn_meal">
                                ADD LOCATION
                              </Button>
                            </FormGroup>
                          </>
                        ) : ''}
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" className='my_label' sm={3}>Snacks(in between meal time)  : </Label>
                          <Col sm={3}>
                            <CheckboxToggle
                              value={checkTogglesnacks}
                              onChange={e => setCheckTogglesnacks(checkTogglesnacks == false ? true : false)}
                            />
                          </Col>
                        </FormGroup>
                        {checkTogglesnacks == true ? (
                          <>
                            <FormGroup row>
                              <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                              <Col sm={3}>
                                <Input type="textarea"
                                  name="ShortDescription"
                                  id="exampleText"
                                  value={mealcomment}
                                  onChange={e => setmealcomment(e.target.value)}
                                  placeholder="" />

                              </Col>
                            </FormGroup>
                          </>
                        ) : ''}
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" className='my_label' sm={3}>Drinks Included : </Label>
                          <Col sm={3}>
                            <CheckboxToggle
                              value={checkToggledrinks}
                              onChange={e => setCheckToggledrinks(checkToggledrinks == false ? true : false)}
                            />
                          </Col>
                        </FormGroup>
                        {checkToggledrinks == true ? (
                          <>
                            <FormGroup row>
                              <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                              <Col sm={3}>
                                <Input type="textarea"
                                  name="ShortDescription"
                                  id="exampleText"
                                  placeholder="" />

                              </Col>
                            </FormGroup>
                          </>
                        ) : ''}
                      </>
                    ) : ''}
                  </>
                ) : ''}
                <h1>List your Amenities</h1>
                <Card>
                  <CardBody>
                    <FormGroup row >
                      <Label htmlFor="personCapacity" sm={2}>Indoor Amenities:</Label>
                      <Col sm={3} id="dropcol">
                        <Select
                          className="dropdownoption"
                          placeholder="Select Option"
                          value={IndoorOptions.filter(obj => selectedValue.includes(obj.value))} // set selected values
                          options={IndoorOptions} // set list of the data
                          onChange={handleChange} // assign onChange functioAddmoreOptions
                          isMulti
                          isClearable
                        />
                      </Col>
                      {isMoreBtn == true ? (
                        <>
                          <Label htmlFor="FreeActivity" sm={2}></Label>
                          <Col sm={3}>
                            <Input type="text"
                              name="freeactivity"
                              id="freeactivitydd"
                              value={freeactivity}
                              onChange={e => setfreeactivity(e.target.value)}
                              placeholder="Free Activities" />
                          </Col>
                          <Button type="button" onClick={() => AddmoreOptionsIndoor(freeactivity)}>Add</Button>
                        </>
                      ) : ''}
                       </FormGroup>
                       <FormGroup row>
                      <Label htmlFor="hotelType" sm={2}>Outdoor Amenities</Label>
                      <Col sm={3}>
                        <Select
                          className="dropoutdoor"
                          placeholder="Select Option"
                          value={outdoorOptions.filter(obj => selecteoutdoor.includes(obj.value))} // set selected values
                          options={outdoorOptions} // set list of the data
                          onChange={handleOutdoor} // assign onChange functioAddmoreOptions
                          isMulti
                          isClearable
                        />
                      </Col>
                      {isMoreBtnOUtDoor == true ? (
                        <>
                         <Label htmlFor="FreeActivity" sm={2}></Label>
                          <Col sm={3}>
                            <Input type="text"
                              name="freeactivity"
                              id="freeactivitydd"
                              value={Outdooractivies}
                              onChange={e => setOutdooractivies(e.target.value)}
                              placeholder="Free Activities" />
                          </Col>
                          <Button type="button" onClick={() => AddmoreOptionsOutdoor(Outdooractivies)}>Add</Button>
                        </>
                      ) : ''}
                      </FormGroup>
                      <FormGroup row>
                      <Label htmlFor="personCapacity" sm={2}>Other Amenities</Label>
                      <Col sm={3}>
                        <Select
                          className="dropoutdoor"
                          placeholder="Select Option"
                          value={otherAmenitiesOptions.filter(obj => selecteaminities.includes(obj.value))} // set selected values
                          options={otherAmenitiesOptions} // set list of the data
                          onChange={handleAminities} // assign onChange functioAddmoreOptions
                          isMulti
                          isClearable
                        />
                      </Col>
                      {isMoreBtnOther == true ? (
                        <>
                          <Label htmlFor="FreeActivity" sm={2}></Label>
                          <Col sm={3}>
                            <Input type="text"
                              name="freeactivity"
                              id="freeactivitydd"
                              value={Otheractivies}
                              onChange={e => setOtheractivies(e.target.value)}
                              placeholder="Free Activities" />
                          </Col>
                          <Button type="button" onClick={() => AddmoreOptionsOther(Otheractivies)}>Add</Button>
                        </>
                      ) : ''}
                    </FormGroup>
                  </CardBody>
                </Card>
                <br />
                <FormGroup row>
                  <Label htmlFor="ActivityListing" sm={4}>Do you offer any activities with this listing?</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkToggleactivities}
                      onChange={e => setCheckToggleactivities(checkToggleactivities == false ? true : false)}
                    />
                  </Col>

                </FormGroup>
                {checkToggleactivities == true ? (
                  <>
                    <FormGroup row>
                      <Label htmlFor="FreeActivity" sm={1}>Free Activities</Label>
                      <Col sm={3}>
                        <Input type="text"
                          name="freeactivity"
                          id="freeactivity"
                          value={freeactivities}
                          onChange={e => setfreeactivities(e.target.value)}
                          placeholder="Free Activities" />

                      </Col>
                      <Label htmlFor="ChargeableActivity" sm={1}>Chargeable Activities</Label>
                      <Col sm={3}>
                        <Input type="text"
                          name="chargeableactivity"
                          id="chargeableactivity"
                          value={ChargeableActivity}
                          onChange={e => setChargeableActivity(e.target.value)}
                          placeholder=" Golf, Kayak, Parasailing,etc " />

                      </Col>
                    </FormGroup>
                  </>
                ) : ''}
                <FormGroup row>
                  <Label htmlFor="KidsClub" sm={4}>The place has kids club</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglekids}
                      onChange={e => setCheckTogglekids(checkTogglekids == false ? true : false)}

                    />
                  </Col>

                </FormGroup>
                {checkTogglekids == true ? (
                  <>
                    <FormGroup row>

                      <Label htmlFor="exampleTitle" sm={4}><b>Age group</b></Label>
                      <Label htmlFor="exampleTitle" sm={4}><b>Opening Days</b></Label>
                      <Label htmlFor="exampleTitle" sm={4}><b>Starting and Closing Time</b></Label>

                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col sm={4}>
                          <Input
                            type="text"
                            name="location"
                            id="location"
                            value={AgeGroup}
                            onChange={e => setAgeGroup(e.target.value)}
                            placeholder="Enter kids age"
                          />
                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>

                        <Col sm={3}>
                          <label>
                            Monday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>

                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Tuesday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>

                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Wednesday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>

                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Thursday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>

                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Friday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>

                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Saturday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                      <Row>
                        <Col sm={4}>

                        </Col>
                        <Col sm={1}>
                          <input type="checkbox" value="" />
                        </Col>
                        <Col sm={3}>
                          <label>
                            Sunday
                          </label>
                        </Col>

                        <Col sm={4}>
                          <Input
                            type="text"
                            id="room_xy_dimensions"
                            name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                          />

                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                      <Col sm={3}>
                        <Input type="textarea"
                          name="ShortDescription"
                          id="exampleText"
                          value={KidComment}
                          onChange={e => setKidComment(e.target.value)}
                          placeholder="for e.g Dress code etc." />

                      </Col>

                    </FormGroup>
                  </>
                ) : ''}
                <FormGroup row>
                  <Label htmlFor="TeenClub" sm={4}>The place has Teens Club</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkToggleteens}
                      onChange={e => setCheckToggleteens(checkToggleteens == false ? true : false)}

                    />
                  </Col>
                </FormGroup>
                {checkToggleteens == true ? (
                  <>
                    <FormGroup row>

                      <Label htmlFor="exampleTitle" sm={4}><b>Age group</b></Label>
                      <Label htmlFor="exampleTitle" sm={4}><b>Opening Days</b></Label>
                      <Label htmlFor="exampleTitle" sm={4}><b>Starting and Closing Time</b></Label>

                    </FormGroup>
                    <FormGroup>
                        <Col sm={4}>
                          <Input
                            type="text"
                            name="location"
                            id="location"
                            value={TeenClub}
                            onChange={e => setTeenClub(e.target.value)}
                            placeholder="Enter Teens age"
                          />
                        </Col>
                        {
                          LivelocationOpeningHours && LivelocationOpeningHours.map((item,index)=>(
                            <Row key={index}>
                              <Col sm={1}>
                                <input type="checkbox" value={item.value}  />
                              </Col>
                              <Col sm={3}>
                                <label>
                                  {item.label}
                                </label>
                              </Col>
                              <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  id="room_xy_dimensions"
                                  name="room_xy_dimensions" placeholder="e.g From 9.00pm till 01.00 am"
                                />
                              </Col>
                            </Row>

                          ))
                        }
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                      <Col sm={3}>
                        <Input type="textarea"
                          name="ShortDescription"
                          id="exampleText"
                          value={TeenComment}
                          onChange={e => setTeenComment(e.target.value)}
                          placeholder="for e.g Dress code etc." />

                      </Col>

                    </FormGroup>
                  </>
                ) : ''}
                 <FormGroup row>
                  <Label htmlFor="exampleTitle" sm={4}>Do you offer Live Music? </Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglemusic}
                      onChange={e => setCheckTogglemusic(checkTogglemusic == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                {checkTogglemusic == true ? (
                  <>
                    <FormGroup>
                      <Row>
                        <Label htmlFor="exampleTitle" sm={1}>1 : Location</Label>
                        <Col sm={3}>
                          <Input
                            type="text"
                            id="is_room_shared"
                            name="customSelect"
                            value={musiclocation}
                            onChange={e => setmusiclocation(e.target.value)}
                          />
                        </Col>
                      
                      </Row>
                      <FormGroup>
                        {
                          LivelocationOpeningHours && LivelocationOpeningHours.map((item,index)=>(
                            <Row key={index}>
                              <Col sm={1}>
                                <input type="checkbox" name="livehours" checked={livecheckbox[index]} value={item.label}  />
                              </Col>
                              <Col sm={3}>
                                <label>
                                  {item.label}
                                </label>
                              </Col>
                              <Label htmlFor="room_number" sm={2}>Starting and Closing Time</Label>
                              <Col sm={4}>
                                <Input
                                  type="text"
                                  name="livehours" onChange={handleChangeFor}
                                  placeholder="e.g From 9.00pm till 01.00 am"
                                />
                              </Col>
                            </Row>
                          
                          ))
                        }
                          <input value="add" onClick={livelocationHoursFun} id="rrdr" type="button"/>
                      </FormGroup>
                      <Row>

                        <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                        <Col sm={3}>
                          <Input type="textarea"
                            name="livemusicDescription"
                            id="exampleText"
                            value={livemusicDescription}
                            onChange={e=>setLivemusicDescription(e.target.value)}
                            placeholder="for e.g Dress code and Bar opening time" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup className="add_my_new_info_music">

                      <Button color="primary" className="ml-auto add_my_new_info_btn_music">
                        ADD LOCATION
                      </Button>
                    </FormGroup>
                  </>
                ) : ''}
                <FormGroup row>
                  <Label htmlFor="ForSpace" sm={4}>Do you want to write a description about the Space </Label>
                  <Col sm={2}>
                    <CheckboxToggle
                      value={checkTogglespace}
                      onChange={e => setCheckTogglespace(checkTogglespace == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                {checkTogglespace == true ? (
                  <>
                    <FormGroup row>
                      <Label htmlFor="DescriptionSpace" sm={1}>Description about the space</Label>
                      <Col sm={3}>
                        <Input type="textarea"
                          name="shortdescriptionspace"
                          id="shortdescriptionspace"
                          value={descriptionscp}
                          onChange={e => setdescriptionscp(e.target.value)}
                          placeholder="Tell us a bit about the property "
                        />
                      </Col>
                    </FormGroup>
                  </>
                ) : ''}
                <FormGroup row>
                  <Label htmlFor="GuestToAccessHead" sm={4}>Do you want to tell your Guest what they can access or how they can enter your property</Label>
                  <Col sm={2}>
                    <CheckboxToggle
                      value={checkToggleguest}
                      onChange={e => setCheckToggleguest(checkToggleguest == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                {checkToggleguest == true ? (
                  <>
                    <FormGroup row>
                      <Label htmlFor="GuestToAccess" sm={3}>Guest access</Label>
                      <Col sm={9}>
                        <Input type="text"
                          name="guestComments"
                          id="guestComments"
                          value={guestAccess}
                          onChange={e => setguestAccess(e.target.value)}
                          placeholder="You have access to the whole apartment as well as a reserved parking space. You can access the garden and the Pool.  Private entrance, Separate street or building entrance.Host greets you" />
                      </Col>
                    </FormGroup>
                  </>
                ) : ''}
                <FormGroup row>
                  <Label htmlFor="RecommendPlacesGuests" sm={3}>Do you want to recommend nearby places for your Guests:</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkTogglenearby}
                      onChange={e => setCheckTogglenearby(checkTogglenearby == false ? true : false)}

                    />
                  </Col>
                </FormGroup>
                {Countries == 132 ?(
                  <>
                  <FormGroup row>
                  <Label htmlFor="RecommendPlacesGuests" sm={3}>MTPA registered & Approved :</Label>
                  <Col sm={3}>
                    <CheckboxToggle
                      value={checkToggleMTPA}
                      onChange={e => setCheckToggleMTPA(checkToggleMTPA == false ? true : false)}
                    />
                  </Col>
                </FormGroup>
                  </>
                ):''}
                {checkTogglenearby == true ? (
                  <>

                    <FormGroup row>
                      <Col sm={2} id="guestGrocery">
                        <button class="m-1  btn btn-success btn-sm">Grocery</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglegrocery}
                          onChange={e => setCheckTogglegrocery(checkTogglegrocery == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglegrocery == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              value={nerbyPlaceName}
                              onChange={e => setnerbyPlaceName(e.target.value)}
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              value={groceryLocation}
                              onChange={e=>setGroceryLocation(e.target.value)}
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />
                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestRestaurant">
                        <button class="m-1  btn btn-success btn-sm">Restaurants</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglerest}
                          onChange={e => setCheckTogglerest(checkTogglerest == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglerest == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestBar">
                        <button class="m-1  btn btn-success btn-sm">Bar</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglebar}
                          onChange={e => setCheckTogglebar(checkTogglebar == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglebar == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestClub">
                        <button class="m-1  btn btn-success btn-sm">Clubs</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkToggleclub}
                          onChange={e => setCheckToggleclub(checkToggleclub == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkToggleclub == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestATM">
                        <button class="m-1  btn btn-success btn-sm">ATM</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkToggleatm}
                          onChange={e => setCheckToggleatm(checkToggleatm == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkToggleatm == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestPetrol">
                        <button class="m-1  btn btn-success btn-sm">Petrol Station</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglepetrol}
                          onChange={e => setCheckTogglepetrol(checkTogglepetrol == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglepetrol == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Add any Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestBank">
                        <button class="m-1  btn btn-success btn-sm">Bank</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglebank}
                          onChange={e => setCheckTogglebank(checkTogglebank == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglebank == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestExchange">
                        <button class="m-1  btn btn-success btn-sm">Money Exchange</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglemonex}
                          onChange={e => setCheckTogglemonex(checkTogglemonex == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglemonex == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestpolice">
                        <button class="m-1  btn btn-success btn-sm">Police Station</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglepolice}
                          onChange={e => setCheckTogglepolice(checkTogglepolice == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglepolice == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestpharmacy">
                        <button class="m-1  btn btn-success btn-sm">Pharmacy</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglepharmacy}
                          onChange={e => setCheckTogglepharmacy(checkTogglepharmacy == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglepharmacy == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Col sm={2} id="guestHospital">
                        <button class="m-1  btn btn-success btn-sm">Hospital</button>
                      </Col>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkTogglehosp}
                          onChange={e => setCheckTogglehosp(checkTogglehosp == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglehosp == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={1}>Name</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder=""
                            />
                          </Col>
                          <Label htmlFor="exampleTitle" sm={1}>Location</Label>
                          <Col sm={3}>
                            <Input
                              type="text"
                              id="room_xy_dimensions"
                              name="room_xy_dimensions" placeholder="Location"
                            />
                          </Col>

                          <Label htmlFor="exampleTitle" sm={1}>Comments</Label>
                          <Col sm={3}>
                            <Input type="textarea"
                              name="ShortDescription"
                              id="exampleText"
                              placeholder="Add any information" />

                          </Col>

                        </FormGroup>
                        <FormGroup className="add_my_new_info_grocery">

                          <Button color="primary" className="ml-auto add_my_new_info_btn_grocery">
                            ADD LOCATION
                          </Button>
                        </FormGroup>

                      </>
                    ) : ''}

                  </>
                ) : ''}
                {/* 
                <h3>Deal Duration</h3>
			            <FormGroup row>
			        	  <Label htmlFor="personCapacity" sm={1}>Start Deal</Label>
                  <Col sm={4}>
                  <DatePicker
                  id="datestartpicker"
                  placeholderText="Select Start Date"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mmaa"
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={date => setStartDate(date)}
                />
                </Col>
                  <Label htmlFor="personCapacity" sm={1}>End deal</Label>
                  <Col sm={4}>
                  <DatePicker
                  id="dateendpicker"
                  placeholderText="Select End Date"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mmaa"
                  selected={endDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  onChange={date => setEndDate(date)}
                />
                 </Col> 
                </FormGroup>*/}
                <h1>Rules</h1>
                <Card>
                  <CardBody>
                    <Label for="RulesAllowed" sm={12}><h3>What is allowed:</h3></Label>
                    <FormGroup row>
                      <br />
                      <Col sm={4}>
                        <label><input type="checkbox" checked={whatIsAllowCheckbox[0]} name="whatIsAllowed" value="  Smoking allowed:" />
                          Smoking allowed:
                        </label>
                      </Col>
                      <Col sm={5}>
                        <Input type="text"
                          name="rulesomkeArea"
                          id="rulesomkeArea"
                          placeholder="If yes,mentioned where can they smoke." />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox"  name="whatIsAllowed" checked={whatIsAllowCheckbox[1]}  value="Events or parties allowed :" />
                          Events or parties allowed :
                        </label>
                      </Col>
                      <Col sm={5}>
                        <Input type="text"
                          name="rulepartiesQuiteHour"
                          id="rulepartiesQuiteHour"
                          placeholder="If checked, Tell us what are the quiet hours ." />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={whatIsAllowCheckbox[2]} name="whatIsAllowed"  value="Guests can receive Visitors" />
                          Guests can receive Visitors
                        </label>
                      </Col>

                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={whatIsAllowCheckbox[5]} name="whatIsAllowed"  value="You are responsible to keep anything that you're provided with in the host in the same condition.  If there is any damage to the property or to any of the items you will be asked to pay for it:" />
                          You are responsible to keep anything that you're provided with in the host in the same condition.  If there is any damage to the property or to any of the items you will be asked to pay for it:
                        </label>
                      </Col>

                    </FormGroup>

                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={whatIsAllowCheckbox[4]} name="whatIsAllowed"  value="Children allowed - Suitable for Kids( from age to ), if no why" />
                          Children allowed - Suitable for Kids( from age to ), if no why
                        </label>
                      </Col>
                      <Col sm={5}>
                        <Input type="text"
                          name="rulekidsAge"
                          id="rulekidsAge"
                          placeholder="If no why, Tell us  ." />
                      </Col>
                    </FormGroup>
                    {indexes.map(index => {
                      const fieldName = `friends[${index}]`;
                      return (
                        <>
                          <FormGroup row>
                            <Label htmlFor="exampleTitle" sm={2}>Add Additional Information</Label>
                            <Col sm={4}>
                              <Input type="textarea"
                               // name="moreWhatAllow[]"
                                id="exampleText"
                                value={moreWhatAllow}
                                onChange={e=>setMoreWhatAllow(e.target.value)}
                                placeholder="Add any information" />
                            </Col>
                          </FormGroup>
                        </>
                      );
                    })}
                    <br />
                    <FormGroup className="add_my_new_info">
                      <Button color="primary" onClick={AddmoreInformation} className="ml-auto add_my_new_info_btn">
                        ADD ADDITIONAL INFORMATION
                      </Button>
                    </FormGroup>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardBody>
                    <Label for="information" sm={3}><h3>Additional Information</h3></Label>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={InformationChecked[0]} name="additonal_info" value=" No noise" />
                          No noise </label>
                      </Col>
                      <Col sm={2}>
                        <Input type="text"
                          name="ruleNoiseTime"
                          id="ruleNoiseTime"
                          value={noise_from}
                          onChange={e=>setnoise_from(e.target.value)}
                          placeholder="from" />
                      </Col>
                      to
                      <Col sm={2}>
                        <Input type="text"
                          name="ruleNoiseTime"
                          id="ruleNoiseTime"
                          value={noise_to}
                          onChange={e=>setnoise_to(e.target.value)}
                          placeholder="to" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={InformationChecked[1]} name="additonal_info" value="Guests should not bring or do drugs in the property" />
                          Guests should not bring or do drugs in the property </label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={InformationChecked[2]} name="additonal_info" value=" Potential for noise due to house renovation next door " />
                          Potential for noise due to house renovation next door </label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={InformationChecked[3]} name="additonal_info" value="To bring a Government ID/Passport which will be shown to the owner" />
                          To bring a Government ID/Passport which will be shown to the owner </label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" name="additonal_info" checked={InformationChecked[4]} value="The property has a wheelchair access" />
                        The property has a wheelchair access</label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="The property is equiped with" sm={4} > The property is equiped with :</Label>
                      <Col sm={3}>
                        <Select
                          className="dropoutdoor"
                          placeholder="Select Option"
                          value = {SaftyGadgets.filter(obj => selecteSaftyGadgets.includes(obj.value))} // set selected values
                          options={SaftyGadgets} // set list of the data
                          onChange={handleselecteSaftyGadgets} // assign onChange functioAddmoreOptions
                          isMulti
                          isClearable
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={4}>
                        <label><input type="checkbox" checked={InformationChecked[0]} name="additonal_info" value=" There is Surveillance/ Recording devices on property" />
                          There is Surveillance/ Recording devices on property</label>
                      </Col>
                      <Col sm={5}>
                        <Input type="text"
                          name="RecordingDeviceStatus"
                          id="RecordingDeviceStatus"
                          placeholder="Specify where your devices are, and whether they will be on or off.  for example, securitiy camera in bedroom, at entrance.." />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={4}>Do you want to add Emergency Services details:</Label>
                      <Col sm={1}>
                        <CheckboxToggle
                          value={checkTogglemergency}
                          onChange={e => setCheckTogglemergency(checkTogglemergency == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                              
                    <FormGroup row>
                      {checkTogglemergency == true ? (
                        <>
                          <Label htmlFor="PoliceStation" sm={1}>Nearby Police Station and Phone number</Label>
                          <Col sm={2}>
                            <Input type="text"
                              name="EmergencyPoliceStation"
                              id="EmergencyPoliceStation"
							  value={policeDetails}
							  onChange={e=>setPoliceDetails(e.target.value)}
                              placeholder="enter here.." />
                          </Col>
                          <Label htmlFor="Hospital" sm={1}>Nearby Hospital and Phone number </Label>
                          <Col sm={2}>
                            <Input type="text"
                              name="EmergencyHospital"
                              id="EmergencyHospital"
							  value={HospitalDetails}
							  onChange={e=>setHospitalDetails(e.target.value)}
                              placeholder=" enter here.. " />

                          </Col>
                          <Label htmlFor=" FireServices" sm={1}>Nearby Fire Services and  Phone number </Label>
                          <Col sm={2}>
                            <Input type="text"
                              name="EmergencyFireService"
                              id="EmergencyFireService"
							  value={fireDetails}
							  onChange={e=>setfireDetails(e.target.value)}
                              placeholder=" enter here... " />
                          </Col>
                        </>
                      ) : ''}


                    </FormGroup>
                    {indexes.map(index => {
                      const fieldName = `friends[${index}]`;
                      return (
                        <>
                          <FormGroup row>
                            <Label htmlFor="exampleTitle" sm={2}>Add Additional Information</Label>
                            <Col sm={4}>
                              <Input type="textarea"
                                name="ShortDescription"
                                id="exampleText"
                                placeholder="Add any information" />
                            </Col>
                          </FormGroup>
                        </>
                      );
                    })}
                    <br />
                    <FormGroup className="add_my_new_info">

                      <Button color="primary" className="ml-auto add_my_new_info_btn">
                        ADD ADDITIONAL INFORMATION
                      </Button>
                    </FormGroup>
                  </CardBody>
                </Card>

                <br />
                <Card>
                  <CardBody>
                    <Label for="guest_rate" sm={12}><h3>Let’s set the rate for your Guest</h3></Label>

                    <FormGroup row>

                      <Label htmlFor="exampleTitle" sm={2}>One Adult will pay </Label>
                      <Col sm={2}>
                        <Input type="number"
                          name="adult_pay"
                          id="adult_pay"
                          value={Adult_rate}
                          onChange={e=>setAdult_rate(e.target.value)}
                        />
                      </Col>
                      <Label  htmlFor="exampleTitle" >(per person per night include VAT)</Label>
                    </FormGroup>
                     <FormGroup className="add_my_new_info_group_booking">
                          <Button color="primary" className="ml-auto add_my_new_info_btn_group_booking">
                            ADD MORE RATE
                          </Button>
                        </FormGroup>
                    <FormGroup row>

                      <Label htmlFor="exampleTitle" sm={4}>Is it suitable for Children
                        </Label>
                      <Col sm={1}>
                        <CheckboxToggle
                          value={checkTogglechildsuit}
                          onChange={e => setCheckTogglechildsuit(checkTogglechildsuit == false ? true : false)}

                        />
                      </Col>
                    </FormGroup>

                    {checkTogglechildsuit == true ? (
                      <>
                        <FormGroup row>

                          <Label htmlFor="exampleTitle" sm={4}>Do you have a special rate for Children
                          </Label>
                          <Col sm={1}>
                            <CheckboxToggle
                              value={checkTogglechildrate}
                              onChange={e => setCheckTogglechildrate(checkTogglechildrate == false ? true : false)}

                            />
                          </Col>
                        </FormGroup>

                        {checkTogglechildrate == true ? (
                          <>
                            <FormGroup row>
                              <Label htmlFor="PoliceStation" sm={2}>Child (including VAT)</Label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  value={childAge}
                                  placeholder="" />

                              </Col> 	<Label htmlFor="PoliceStation" sm={1}>Per night</Label>
                              <Label htmlFor="PoliceStation" sm={1}>Age from</Label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  value={agefrom}
                                  onChange={e=>setAgefrom(e.target.value)}
                                  placeholder="" />

                              </Col><label>To</label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  value={ageto}
                                  onChange={e=>setAgeto(e.target.value)}
                                  placeholder="" />

                              </Col><span>Year(s)</span>
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="PoliceStation" sm={4}>Infant</Label>
                              <Col sm={1}>
                                <CheckboxToggle
                                  value={checkToggleinfant}
                                  onChange={e => setCheckToggleinfant(checkToggleinfant == false ? true : false)}
                                />
                              </Col>
                            </FormGroup>
                            {checkToggleinfant == true ? (
                              <>
                                <FormGroup row>
                                  <Col sm={2}>
                                    <Input type="text"
                                      name="child_pay"
                                      id="child_pay"
                                      placeholder="free" value="Free" readonly />
                                  </Col><Label htmlFor="PoliceStation" sm={1}></Label>
                                  <Label htmlFor="PoliceStation" sm={1}>Age from</Label>
                                  <Col sm={2}>
                                    <Input type="number"
                                      name="child_pay"
                                      id="child_pay"
                                      value={infantagefrom}
                                      onChange={e=>setInfantagefrom(e.target.value)}
                                      placeholder="" />

                                  </Col><label>To</label>
                                  <Col sm={2}>
                                    <Input type="number"
                                      name="child_pay"
                                      id="child_pay"
                                      value={infantageto}
                                      onChange={e=>setInfantageto(e.target.value)}
                                      placeholder="" />
                                  </Col><span>Year(s)</span>
                                </FormGroup>
                              </>
                            ) : ''}
                          </>
                        ) : ''}
                      </>
                    ) : ''}
                    <FormGroup row>
                      <Label htmlFor="exampleTitle" sm={4}>Do you offer a Group Booking rate
                      </Label>
                      <Col sm={1}>
                        <CheckboxToggle
                          value={checkTogglegroupbook}
                          onChange={e => setCheckTogglegroupbook(checkTogglegroupbook == false ? true : false)}
                        />
                      </Col>
                    </FormGroup>
                    {checkTogglegroupbook == true ? (
                      <>
                        <FormGroup row>
                        <Label htmlFor="exampleTitle"> Book the property for upto</Label>
                          <Col sm={2}>  
                            <Input
                            type="number"
                            id=""
                            />
                            </Col>
                            <Label htmlFor="exampleTitle">of people for</Label>
                            <Col sm={3}>
                            <Input
                            type="number"
                            name="rate"
                            />
                          </Col>
                          <Label htmlFor="exampleTitle">per night(vat included)</Label>
                        </FormGroup>
                       
                        <FormGroup row>
                          <Label htmlFor="exampleTitle" sm={4}>Is it suitable for either children or infant</Label>
                          <Col sm={1}>
                            <CheckboxToggle
                              value={checkTogglegroupforchild}
                              onChange={e => setCheckTogglegroupforchild(checkTogglegroupforchild == false ? true : false)}
                            />
                          </Col>
                          </FormGroup>
                        {checkTogglegroupforchild == true ? (
                          <>
                            <FormGroup row>
                              <Label htmlFor="PoliceStation" sm={3}>Suitable for children of age</Label>
                              <Label>From</Label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  placeholder="" />

                              </Col><label>To</label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  placeholder="" />

                              </Col><span>Year(s)</span>
                            </FormGroup>
                            <FormGroup row>
                              <Label htmlFor="PoliceStation" sm={3}>Suitable for Infant of age</Label>
                              <Label>From</Label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  placeholder="" />

                              </Col><label>To</label>
                              <Col sm={2}>
                                <Input type="number"
                                  name="child_pay"
                                  id="child_pay"
                                  placeholder="" />

                              </Col><span>Year(s)</span>

                            </FormGroup>
                           

                          </>
                        ) : ''}
                      </>



                    ) : ''}
                     <FormGroup row>
                        <Label htmlFor="exampleTitle" sm={4}>Do you have a day time rate?</Label>
                        <Col sm={1}>
                          <CheckboxToggle
                            value={checkToggledayrate}
                            onChange={e => setCheckToggledayrate(checkToggledayrate == false ? true : false)}
                          />
                        </Col>
                        </FormGroup>
                     {checkToggledayrate == true ? (
                          <>
                            <FormGroup row>
                              <Label htmlFor="PoliceStation" sm={2}>Half Day</Label>
                              <Col sm={1}>
                                <CheckboxToggle
                                  value={checkTogglehalfday}
                                  onChange={e => setCheckTogglehalfday(checkTogglehalfday == false ? true : false)}

                                />
                              </Col>
                            </FormGroup>
                            {checkTogglehalfday == true ? (
                              <>
                                <FormGroup row>
                                  <Label htmlFor="PoliceStation" sm={1}> From </Label><Col sm={2}>
                                    <Input type="time"
                                      name="child_pay"
                                      id="child_pay"
                                      placeholder="" />

                                  </Col>
                                  <Col sm={2}>
                                    <CustomInput
                                      type="select"
                                      name="which_meal_type"
                                      id="which_meal_type"
                                    >

                                      <option key='0' value=''>Select</option>
                                      <option key='1' value='AM'>AM</option>
                                      <option key='2' value='PM'>PM</option>

                                    </CustomInput>

                                  </Col>
                                  <Label htmlFor="PoliceStation" sm={0}> To </Label>
                                  <Col sm={2}>
                                    <Input type="time"
                                      name="child_pay"
                                      id="child_pay"
                                      placeholder="" />

                                  </Col>
                                  <Col sm={2}>
                                    <CustomInput
                                      type="select"
                                      name="which_meal_type"
                                      id="which_meal_type"
                                    >

                                      <option key='0' value=''>Select</option>
                                      <option key='1' value='AM'>AM</option>
                                      <option key='2' value='PM'>PM</option>

                                    </CustomInput>

                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label htmlFor="PoliceStation" sm={3}>Guest will have to pay (per person including VAT)</Label>
                                  <Col sm={2}>
                                    <Input type="number"
                                      name="child_pay"
                                      id="child_pay"
                                      placeholder="" />

                                  </Col>
                                </FormGroup>
                              </>
                            ) : ''}

                            <FormGroup row>


                              <Label htmlFor="PoliceStation" sm={2}>Full Day</Label>
                              <Col sm={1}>
                                <CheckboxToggle
                                  value={checkTogglefullday}
                                  onChange={e => setCheckTogglefullday(checkTogglefullday == false ? true : false)}

                                />
                              </Col>

                            </FormGroup>
                            {checkTogglefullday == true ? (
                              <>
                                <FormGroup row>

                                  <Label htmlFor="PoliceStation" sm={1}> From </Label><Col sm={2}>
                                    <Input type="time"
                                      name="child_pay"
                                      id="child_pay"
                                      value={halfdayTime}
                                      onChange={e=>setHalfdayTime(e.target.value)}
                                      placeholder="" />

                                  </Col>
                                  <Col sm={2}>
                                    <CustomInput
                                      type="select"
                                      name="which_meal_type"
                                      id="which_meal_type"
                                      value={halfdayTimeto}
                                      onChange={e=>setHalfdayTimeto(e.target.value)}
                                    >

                                      <option key='0' value=''>Select</option>
                                      <option key='1' value='AM'>AM</option>
                                      <option key='2' value='PM'>PM</option>

                                    </CustomInput>

                                  </Col>
                                  <Label htmlFor="PoliceStation" sm={0}> To </Label>
                                  <Col sm={2}>
                                    <Input type="time"
                                      name="child_pay"
                                      id="child_pay"
                                      placeholder="" />

                                  </Col>
                                  <Col sm={2}>
                                    <CustomInput
                                      type="select"
                                      name="which_meal_type"
                                      id="which_meal_type"
                                    >

                                      <option key='0' value=''>Select</option>
                                      <option key='1' value='AM'>AM</option>
                                      <option key='2' value='PM'>PM</option>

                                    </CustomInput>

                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label htmlFor="PoliceStation" sm={3}>Guest will have to pay (per person including VAT)</Label>
                                  <Col sm={2}>
                                    <Input type="number"
                                      name="child_pay"
                                      id="child_pay"
                                      value={GuestPay}
                                      onChange={e=>e.target.value}
                                      placeholder="" />

                                  </Col>
                                </FormGroup>
                              </>
                            ) : ''}

                          </>
                        ) : ''}
                  </CardBody>
                </Card>

                <br />


                <Card>
                  <CardBody>
                    <FormGroup row>
                      <Label htmlFor="DiscountLongStay" sm={2}>Do you offer any discount on Long Stay?</Label>
                      <Col sm={1}>
                        <CheckboxToggle
                          value={checkTogglediscount}
                          onChange={e => setCheckTogglediscount(checkTogglediscount == false ? true : false)}

                        />
                      </Col>
                      {checkTogglediscount == true ? (
                        <>
                          <Label htmlFor="DiscountCode" sm={2}>Create Discount code</Label>
                          <Col sm={3}>
                            <Input type="text"
                              name="discountCodeLongStay"
                              id="discountCodeLongStay"
                              value={discount}
                              onChange={e=>setDiscount(e.target.value)}
                              placeholder="enter codes" />
                          </Col>
                        </>
                      ) : ''}
                    </FormGroup>
                    {indexes.map(index => {
                      const fieldName = `friends[${index}]`;
                      return (
                        <>
                          <FormGroup row>
                            <Label htmlFor="exampleTitle" sm={2}>Add Additional Information</Label>
                            <Col sm={4}>
                              <Input type="textarea"
                                name="ShortDescription"
                                id="exampleText"
                                placeholder="Add any information" />

                            </Col>
                          </FormGroup>
                        </>
                      );
                    })}
                    <br />
                    <FormGroup className="add_my_new_info">

                      <Button color="primary" className="ml-auto add_my_new_info_btn">
                        ADD ADDITIONAL INFORMATION
                      </Button>
                    </FormGroup>
                  </CardBody>
                </Card>

                <br />
                <Card>
                  <CardBody>
                    <Label for="ReservationInformation" sm={12}><h3>Reservation Preferences</h3></Label>
                    <FormGroup row>
                      <Label htmlFor="GuestAriveType" sm={3}>How much time you need before Guests arrive ?</Label>
                      <Col sm={2}>
                        <select id="guestarivetype" name="guestarivetype" value={GuestArrive} onChange={e=>setGuestArrive(e.target.value)} className="custom-select">
                          <option value="">Select</option>
                          <option value="hour">Hours</option>
                          <option value="minute">Minutes</option>
                          <option value="days">Days</option>
                        </select>
                      </Col>
                      <Col sm={3}>
                        <Input type="text"
                          name="arivehourdays"
                          id="arivehourdays"
                          value={TimeGuestArrive}
                          onChange={e=>setTimeGuestArrive(e.target.value)}
                          placeholder="enter hours and days here." />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label htmlFor="Staylenght" sm={4}>Do you want to activate Stay length ?</Label>
                      <Col sm={1}>
                        <CheckboxToggle
                          value={checkTogglestay}
                          onChange={e => setCheckTogglestay(checkTogglestay == false ? true : false)}

                        />

                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      {checkTogglestay == true ? (
                        <>
                          <Label htmlFor="MinStayHours" sm={2}>Minimum stay</Label>
                          <Col sm={1}>
                            <Input type="number"
                              name="minstayhours"
                              id="minstayhours"
                              value={minStayDayOption}
                              onChange={e=>setMinStayDayOption(e.target.value)}
                              placeholder="" />
                          </Col>
                          <Col sm={2}>
                            <CustomInput
                              type="select"
                              name="which_meal_type"
                              id="which_meal_type"
                              value={minStayDayOptionTime}
                              onChange={e=>setMinStayDayOptionTime(e.target.value)}
                            >

                              <option key='0' value=''>Select</option>
                              <option key='1' value='Hour(s)'>Hour(s)</option>
                              <option key='2' value='Day(s)'>Day(s)</option>
                              <option key='3' value='Night(s)'>Night(s)</option>

                            </CustomInput>
                          </Col>
                          <Label htmlFor="MaxStayHours" sm={2}>Maximum stay</Label>
                          <Col sm={1}>
                            <Input type="number"
                              name="maxstayhours"
                              id="maxstayhours"
                              value={maxStayDayOption}
                              onChange={e=>setMaxStayDayOption(e.target.value)}
                              placeholder="" />
                          </Col>
                          <Col sm={2}>
                            <CustomInput
                              type="select"
                              name="which_meal_type"
                              id="which_meal_type"
                              value={minStayDayOptionTime}
                              onChange={e=>setMinStayDayOptionTime(e.target.value)}
                            >

                              <option key='0' value=''>Select</option>
                              <option key='1' value='Hour(s)'>Hour(s)</option>
                              <option key='2' value='Day(s)'>Day(s)</option>
                              <option key='3' value='Night(s)'>Night(s)</option>

                            </CustomInput>
                          </Col>
                        </>
                      ) : ''}
                    </FormGroup>

                    <FormGroup row>
                      <Label htmlFor="CheckIn" sm={2}>Check in </Label>
                      <Col sm={2}>
                        <Input type="time"
                          name="guestcheckin"
                          id="guestcheckin"
                          value={CheckInFrom}
                          onChange={e=>setCheckInFrom(e.target.value)}
                          placeholder="time" />
                      </Col>
                      <Col sm={2}>
                        <CustomInput
                          type="select"
                          name="which_meal_type"
                          id="which_meal_type"
                          value={CheckInFromTime}
                          onChange={e=>setCheckInFromTime(e.target.value)}
                        >
                          <option key='0' value=''>Select</option>
                          <option key='1' value='AM'>AM</option>
                          <option key='2' value='PM'>PM</option>

                        </CustomInput>

                      </Col>
                      <Label htmlFor="CheckOut" sm={2}>Check out</Label>
                      <Col sm={2}>
                        <Input type="time"
                          name="guestcheckinout"
                          id="guestcheckout"
                          value={CheckInOut}
                          onChange={e=>setCheckInOut(e.target.value)}
                          placeholder="time" />
                      </Col>
                      <Col sm={2}>
                        <CustomInput
                          type="select"
                          name="which_meal_type"
                          id="which_meal_type"
                          value={CheckInOutTime}
                          onChange={e=>setCheckInOutTime(e.target.value)}
                        >

                          <option key='0' value=''>Select</option>
                          <option key='1' value='AM'>AM</option>
                          <option key='2' value='PM'>PM</option>

                        </CustomInput>

                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="GuestPay" sm={3}>How would you like your Guest to pay:</Label>
                      <Col sm={6}>
                        <Row>
                          <Col sm={1}>
                            <input 
                            type="checkbox" 
                            className="paying_options_check" 
                            value={PayFull} 
                            name="guest_pay" 
                            id="full_pay"
                            onChange={e => setPayfull(checkTogglestay == false ? true : false)}
                            />
                          </Col>
                          <Col sm={4}>
                            <label>
                              Pay in Full
                            </label>
                          </Col>
                          <Col sm={1}>
                            <input type="checkbox" className="paying_options_check" value="half_pay" name="guest_pay" id="half_pay" />
                          </Col>
                          <Col sm={6}>
                            <label>
                              Pay(25% of the overall amount) upfront and the rest on arrival
                            </label>
                          </Col>
                        </Row>
                        <Row>
                          <span className="half_pay paying_options">
                            <label>
                              On arrival please choose how your Guest will pay the remaining amount to you
                            </label>
                            <Col sm={1}>
                              <input type="checkbox" name="choose_pays" checked={choosepayscheckbox[0]} value=" On arrival please choose how your Guest will pay the remaining amount to you" id="cash" />
                            </Col>
                            <Col sm={1}>
                              <label>
                                Cash
                              </label>
                            </Col>
                            <Col sm={1}>
                              <input type="checkbox" name="choose_pays" checked={choosepayscheckbox[1]} value="paypal" id="paypal" />
                            </Col>
                            <Col sm={1}>
                              <label>
                                Paypal
                              </label>
                            </Col>
                            <Col sm={1}>
                              <input type="checkbox" name="choose_pays" checked={choosepayscheckbox[2]} value="Debit Card" id="debitCard" />
                            </Col>
                            <Col sm={2}>
                              <label>
                                Debit Card
                              </label>
                            </Col>
                            <Col sm={1}>
                              <input type="checkbox" name="choose_pays" checked={choosepayscheckbox[3]} value="Visit Wallet" id="visitwallet" />
                            </Col>
                            <Col sm={1}>
                              <label>
                                Visit Wallet
                              </label>
                            </Col>
                          </span>
                        </Row>
                      </Col>
                    </FormGroup>
                    <br />
                    <FormGroup className="add_my_new_info">

                      <Button color="primary" className="ml-auto add_my_new_info_btn">
                        ADD ADDITIONAL INFORMATION
                      </Button>
                    </FormGroup>
                  </CardBody>
                </Card>

                <br />

                <Card>
                  <CardBody>
                    <Row>
                      <Label for="policy" sm={3}><h3>Cancellation Policy</h3></Label>
                    </Row>
                    <Row>
                      <Label>
                        Please select the cancellation options you wish to offer
                      </Label>
                    </Row>
                    <FormGroup row>
                      {PolicyList.map((data, index) =>
                        <Col key={index} sm={2}>
                          <div id="cat_div">
                            <input type="checkbox" name="checkboxMain" value={index} cusdata={data.id} checked={maincheckbox[index]} onChange={Select_patent_cat} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Label>{data.title}</Label>
                            <div style={{ display: 'none' }} id={'hidediv_' + index}>
                              {/* style={{display:'none'}} */}
                              {data.getcancelpolicy.map((data1, index1) =>
                                <Label key={index1} id="hidecol" >
                                  <input type="checkbox" name="Chidcheckbox" value={index1} parentindex={index} className={'item_'+data1.policy_category_id} parentid={data.id} checked={checkbox[index1]} onChange={select_child_cat} />
                                  {data1.description}
                                </Label>
                              )}
                            </div>
                          </div>
                        </Col>
                      )}
                      <input type="button" value="add" onClick={cencellpolicyfun} id="shaan"/>
                    </FormGroup>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardBody>
                    <FormGroup row>
                      <Label htmlFor="ForGuestConform" sm={3}>Do you Requires confirmation from Guests:</Label>
                      <Col sm={3}>
                        <CheckboxToggle
                          value={checkToggleconfirm}
                          onChange={e => setCheckToggleconfirm(checkToggleconfirm == false ? true : false)}
                        />
                      </Col>

                    </FormGroup>
                    {checkToggleconfirm == true ? (
                      <>
                        <FormGroup row>
                          <Label htmlFor="ForGuestConform" sm={3}><h4>Instant Booking</h4></Label>
                        </FormGroup>
                        <FormGroup row>
                          <Col sm={3}><Label htmlFor="ForGuestConform"><h5>Guest Requirement for instant Booking</h5></Label>
                          </Col>
                          <Col sm={8}>
                            <p htmlFor="ForGuestConform">("Guests that meet the following requirement will instantly be qualified to Book instantly.  Others will need to send a request first.   ")</p>
                          </Col>
                        </FormGroup>
                         <FormGroup>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[6]} value=" Valid Email Address" name="validEmail" />
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Valid Email Address
                              </Label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[7]} value=" Payment information" name="validEmail"/>
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Payment information
                              </Label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[1]} value="Mobile number" name="validEmail"/>
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Mobile number
                              </Label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[2]} value="Inform you on the number of Guests who are coming" name="validEmail"/>
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Inform you on the number of Guests who are coming
                              </Label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[3]} value="Agree with all Rules" name="validEmail"/>
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Agree with all Rules
                              </Label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[4]} value=" Agree to the cancellation policy" name="validEmail"/>
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Agree to the cancellation policy
                              </Label>
                            </Col>
                          </Row>
                          <Row>
                            <Col sm={1}>
                              <input type="checkbox" checked={instantBooking[5]} value="Accept the responsibility if any damages caused during their stay to the property they are liable to pay for the repairing cost and or/ for a replacement" name="validEmail" />
                            </Col>
                            <Col sm={8}>
                              <Label htmlFor="ForGuestConform">
                                Accept the responsibility if any damages caused during their stay to the property they are liable to pay for the repairing cost and or/ for a replacement
                              </Label>
                            </Col>
                          </Row>
                        </FormGroup>
                        <FormGroup className="add_my_new_info">

                          <Button color="primary" className="ml-auto add_my_new_info_btn">
                            ADD ADDITIONAL INFORMATION
                          </Button>
                        </FormGroup>
                        <FormGroup row>
                          <Label htmlFor="ForGuestConform" sm={10}><h4>Pre Booking message before your Guest Book </h4></Label>
                          <Col sm={10}>
                            <Input type="text"
                              name="adult_pay"
                              id="adult_pay"
                              value={GuestConform}
                              value={e=>setGuestConform(e.target.value)}
                              placeholder="Hi, thanks for choosing our place :) 
                        Please be sure to carefully read the description, the house rules and the cancellation policy before your stay! 
                        "
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label htmlFor="ForGuestConform" sm={10}>Enable Calendar to manage booking and availability of property</Label>
                          <Col sm={1}>
                            <CheckboxToggle
                              value={checkTogglecalendar}
                              onChange={e => setCheckTogglecalendar(checkTogglecalendar == false ? true : false)}
                            />
                          </Col>
                        </FormGroup>
                        {checkTogglecalendar == true ? (
                          <>
                           <FormGroup row>
                          <Label htmlFor="personCapacity" sm={1}>Start Deal</Label>
                          <Col sm={3}>
                            <DatePicker
                              id="datestartpicker"
                              placeholderText="Select Start Date"
                              showTimeSelect
                              dateFormat="MMMM d, yyyy h:mmaa"
                              selected={startDate}
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                              onChange={date => setStartDate(date)}
                            />
                          </Col>
                          <Label htmlFor="personCapacity" sm={1}>End deal</Label>
                          <Col sm={3}>
                            <DatePicker
                              id="dateendpicker"
                              placeholderText="Select End Date"
                              showTimeSelect
                              dateFormat="MMMM d, yyyy h:mmaa"
                              selected={endDate}
                              selectsEnd
                              startDate={startDate}
                              endDate={endDate}
                              minDate={startDate}
                              onChange={date => setEndDate(date)}
                            />
                          </Col>
                        <Col sm={3}>
                        <DayPicker
                            initialMonth={new Date(2017, 3)}
                            disabledDays={[
                              new Date(2017, 3, 12),
                              new Date(2017, 3, 2),
                              {
                                after: new Date(2017, 3, 20),
                                before: new Date(2017, 3, 25),
                              },
                            ]}
                          />
                          </Col>
                        </FormGroup>
                          </>
                        ) : ''}
                      </>
                    ) : ''}
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardBody>
                    <FormGroup>
                      <Row>
                        <Col sm={4}></Col>
                        <h3 className="property_head text-center">You are one step closer to publish your Listing!</h3>
                      </Row>
                      <br />
                      <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                          <p>We will review your Listing and once it is approved by our team you are good to go Live!  Once your Listing goes Live, Guests will be able to book straight away and you will start making sales.
                          </p>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardBody>
                    <FormGroup>
                      <Row>
                        <Col sm={4}></Col>
                        <h3 className="property_head text-center">And Finally… Rules, Laws and Taxes</h3>
                      </Row>
                      <br />
                      <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                          <p>
                            Please make sure that you are upto date with the laws in the country where you are listing your services.   </p>

                          <p>You are responsible with the decision for your listing, and to make sure that we are working in a fully trusted environment with all our users on this platform we require to review your listings before it goes live.  You are also advised to collect and remit your taxes in your respective countries where applicable.  </p>

                          <p>It is forbidden to encourage a Guest to go-past the Visit.mu platform and to book directly from you, or from your business website. </p>
                          <p>Please do not share any email address, phone numbers or website URL on any of your email exchanges or even on your Listings.</p>
                          <p> Once a Booking is confirmed your details will automatically be shared with the Guests. </p>
                          <p> All work is done in full transparency and all messages are filtered and monitored.  Sometimes you will be tested by  random Guests to check if you are following the rules.   </p>

                          <p>By accepting the Terms and conditions, you agree that you will comply with the applicable laws and regulations in the country where your services are listed, and to our rules.

                          </p>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Form>
            </ModalBody>
            <ModalFooter>
              {/* <input type="Submit" value="ADD" class="btn btn-success" />*/}
              <Button color="primary" className="ml-auto" onClick={handleSubmit}>
                Publish Listing
              </Button>
            </ModalFooter>
          </Modal>
         
        </Fragment>
      )

    }
  } else {
    return <Redirect to='/' />
  }

}
export default Hotels;
