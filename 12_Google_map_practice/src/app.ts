import axios from "axios";

const form = document.querySelector("form")!;
const address = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "발급받은 API KEY";

declare var google: any; 

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lug: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const submitHandler = (event: Event) => {
  event.preventDefault();
  const inputAddressValue = address.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        inputAddressValue
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not find address");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map"), {
        center: coordinates,
        zoom: 16
      }); 

      new google.maps.Marker({position: coordinates, map: map});
    })
    .catch((e) => {
      alert(e.message);
      console.log(e);
    });
};

form.addEventListener("submit", submitHandler);
