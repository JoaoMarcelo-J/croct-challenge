import * as S from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

import { RangeInput } from 'components/RangeInput'

declare type Preview = {
  name: string
  imageURL: string
}

interface PreviewProps {
  preview: Preview
  setPreview: (preview: null | Preview) => void
}

export function PreviewImage({ preview, setPreview }: PreviewProps) {
  const [zoom, setZoom] = useState<number[]>([50])

  return (
    <S.Container>
      <S.ImageBox zoom={(zoom[0] * 2) / 100}>
        <Image
          src={preview.imageURL}
          alt={preview.name}
          width="113px"
          height="113px"
          objectFit="cover"
        />
      </S.ImageBox>

      <S.RangeBox>
        <p>Crop</p>

        <RangeInput
          maxValue={75}
          minValue={35}
          values={zoom}
          setValues={setZoom}
        />

        <button>Save</button>
      </S.RangeBox>

      <S.CloseBox>
        <IoClose onClick={() => setPreview(null)} />
      </S.CloseBox>
    </S.Container>
  )
}
