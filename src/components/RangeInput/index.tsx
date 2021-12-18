import { Range, getTrackBackground } from 'react-range'

interface RangeSlideProps {
  minValue: number
  maxValue: number
  values: number[]
  setValues: (values: number[]) => void
}

export function RangeInput({
  minValue,
  maxValue,
  values,
  setValues
}: RangeSlideProps) {
  return (
    <Range
      step={0.1}
      min={minValue}
      max={maxValue}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: '36px',
            display: 'flex',
            width: '100%'
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: '3px',
              width: '100%',
              borderRadius: '4px',
              background: getTrackBackground({
                values: values,
                colors: ['#3F80FF', '#B9D1FF'],
                min: minValue,
                max: maxValue
              }),
              alignSelf: 'center'
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '18px',
            width: '18px',
            borderRadius: '50%',
            backgroundColor: '#3F80FF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      )}
    />
  )
}
