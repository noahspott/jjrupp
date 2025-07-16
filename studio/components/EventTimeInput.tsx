import React, {useState, useEffect} from 'react'
import {set, ObjectInputProps} from 'sanity'
import moment from 'moment-timezone'

const EventTimeInput: React.FC<ObjectInputProps> = ({value = {}, onChange}) => {
  const [startDate, setStartDate] = useState<string>(value?.startDate || '')
  const [timeZone, setTimeZone] = useState<string>(value?.timeZone || 'America/New_York')
  const [utcStartDate, setUtcStartDate] = useState<string>(value?.utcStartDate || '')

  // Filtered list of time zones
  const timezones: string[] = moment.tz
    .names()
    .filter((tz) => tz.toLowerCase().includes('america/') || tz.toLowerCase().includes('us/'))

  useEffect(() => {
    if (!startDate || !timeZone) return

    const computedUtcStart = moment.tz(startDate, timeZone).utc().format()

    if (value?.utcStartDate === computedUtcStart) return

    onChange(
      set({
        startDate,
        timeZone,
        utcStartDate: computedUtcStart,
      }),
    )
  }, [startDate, timeZone, value, onChange])

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <label
          style={{
            font: 'Inter',
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: '500',
          }}
        >
          Time Zone:
        </label>
        <select
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
          style={{
            padding: '6px 35px 6px 12px',
            background: 'transparent',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#2a2d3f',
            borderRadius: '3px',
            fontFamily: 'Inter',
            fontSize: '15px',
            backgroundOrigin: 'padding-box',
          }}
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <label
          style={{
            font: 'Inter',
            fontFamily: 'Inter',
            fontSize: '13px',
            fontWeight: '500',
          }}
        >
          Start Date & Time:
        </label>
        <input
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{
            padding: '8px 8px',
            background: 'transparent',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#2a2d3f',
            borderRadius: '3px',
            fontFamily: 'Inter',
            fontSize: '15px',
          }}
        />
      </div>

      <div>
        <p
          style={{
            fontSize: '13px',
          }}
        >
          <strong>Stored UTC Start:</strong> {utcStartDate || 'Not set yet'}
        </p>
      </div>
    </div>
  )
}

export default EventTimeInput
