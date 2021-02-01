import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const slides = [
  'https://images.squarespace-cdn.com/content/v1/595a7bb3b8a79b6569459e6e/1499893462941-FNQJEWB45BLCGJQVMW9Y/ke17ZwdGBToddI8pDm48kI4QF8RGIFmbZ46RQC1ABx4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dupWXZCjBxO6Eru8y-V_lzzf-uIPxaMxmNnxNu5fcG-P7zs2yPjc1ECvpa5Zm_kMqw/globalSunsetBanner_1600_300.jpg?format=2500w',
  'https://images.squarespace-cdn.com/content/v1/595a7bb3b8a79b6569459e6e/1499893462941-FNQJEWB45BLCGJQVMW9Y/ke17ZwdGBToddI8pDm48kI4QF8RGIFmbZ46RQC1ABx4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dupWXZCjBxO6Eru8y-V_lzzf-uIPxaMxmNnxNu5fcG-P7zs2yPjc1ECvpa5Zm_kMqw/globalSunsetBanner_1600_300.jpg?format=2500w',
  'https://images.squarespace-cdn.com/content/v1/595a7bb3b8a79b6569459e6e/1499893462941-FNQJEWB45BLCGJQVMW9Y/ke17ZwdGBToddI8pDm48kI4QF8RGIFmbZ46RQC1ABx4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dupWXZCjBxO6Eru8y-V_lzzf-uIPxaMxmNnxNu5fcG-P7zs2yPjc1ECvpa5Zm_kMqw/globalSunsetBanner_1600_300.jpg?format=2500w',
]

const MyCarousels = () => {
  const [activeIndex] = useState(1)

  return (
    <CRow>
      <CCol xs="12" xl="12">
        <CCarousel animate autoSlide={3000}>
            <CCarouselIndicators/>
            <CCarouselInner>
            <CCarouselItem>
                <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                <CCarouselCaption><h3>Best Delivery Partner</h3><p>We are Deliverying your all needs</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
            </CCarouselItem>
            </CCarouselInner>
            <CCarouselControl direction="prev"/>
            <CCarouselControl direction="next"/>
        </CCarousel>
      </CCol>
    </CRow>
  )
}

export default MyCarousels
