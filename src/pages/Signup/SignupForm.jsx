import React from "react";
import { Label, TextInput, Button, Spinner } from "flowbite-react";

export default function SignupForm({
  fullName,
  eventTitle,
  eventDate,
  newsletter,
  purpose,
  isLoading,
  onFullNameChange,
  onEventTitleChange,
  onEventDateChange,
  onNewsletterChange,
  onPurposeChange,
  onSubmit,
}) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullName" value="Name / Full name" className="text-gray-300" />
        <TextInput
          id="fullName"
          value={fullName}
          onChange={onFullNameChange}
          required
          placeholder="z. B. Maria Müller"
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="eventTitle" value="Titel der Veranstaltung / Title of the event" className="text-gray-300" />
        <TextInput
          id="eventTitle"
          value={eventTitle}
          onChange={onEventTitleChange}
          required
          placeholder="Tanz der Befreiung"
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <Label htmlFor="eventDate" value="Datum / Date of the event" className="text-gray-300" />
        <TextInput
          id="eventDate"
          type="date"
          min={today}
          value={eventDate}
          onChange={onEventDateChange}
          required
          className="w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <p className="text-gray-300 font-medium mb-1">Newsletter</p>
        <div className="flex items-center gap-6 text-white">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="newsletter"
              value="yes"
              checked={newsletter === "yes"}
              onChange={onNewsletterChange}
            />
            <span>Ja / Yes</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="newsletter"
              value="no"
              checked={newsletter === "no"}
              onChange={onNewsletterChange}
            />
            <span>Nein / No</span>
          </label>
        </div>
      </div>

      {/* Payment block */}
      <div className="rounded-md bg-[#0F6B66] p-3 text-white space-y-2">
        <p className="font-semibold">
          Überweise und sichere Dir Deinen Platz / Transfer the fee to save your spot
        </p>
        <div className="text-sm leading-6">
          <div>Institut für Rituelle Tanzpädagogik gGmbH</div>
          <div>GLS Bank</div>
          <div>
            IBAN: <span className="font-mono">DE53 4306 0967 1271 4650 00</span>
          </div>
          <div>
            BIC: <span className="font-mono">GENODEM1GLS</span>
          </div>
        </div>

        <div>
          <Label htmlFor="purpose" value="Verwendungszweck / Purpose of payment" className="text-gray-200" />
          <TextInput
            id="purpose"
            value={purpose}
            onChange={onPurposeChange}
            placeholder="z. B. Tanz der Befreiung – [dein Name]"
            className="mt-1 w-full rounded-md border border-gray-600 bg-[#027D8F] p-2 text-white focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="cursor-pointer w-full rounded-md dark:bg-[#027D8F] light:bg-[#027D8F] py-2 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#315358] focus:outline-none focus:ring-4 focus:ring-red-500"
        disabled={isLoading}
      >
        {isLoading && <Spinner size="sm" className="mr-2" />}
        Register
      </Button>
    </form>
  );
}
