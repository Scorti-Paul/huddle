import { Component } from "react";

export default class GetStartedFreeBtn extends Component {

  render() {

    return (
      <div
        className="flex justify-center">
        <button
          className="mt-8 bg-Pink rounded-full px-12 py-[0.725rem] text-veryPaleBlue font-bold flex justify-center shadow-lg hover:shadow-2xl hover:bg-lightPink hover:cursor-pointer md:py-[1rem] md:px-[5rem]">
          Get Started For Free
        </button>
      </div>
    )
  }
}