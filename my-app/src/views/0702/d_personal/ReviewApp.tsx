import React, { useRef, useState, ChangeEvent } from "react";

export interface Review {
  id: number;
  name: string; // 사용자 이름
  product: string; // 제품
  content: string; // 후기
  success: boolean; // 구매여부
}

const initialReview: Review[] = [
  {
    id: 1,
    name: "박보검",
    product: "Candy",
    content: "단맛이 강합니다",
    success: true,
  },

  {
    id: 2,
    name: "김수현",
    product: "Fridge",
    content: "음식이 잘 보관됩니다",
    success: true,
  },

  {
    id: 3,
    name: "여진구",
    product: "TV",
    content: "화질이 선명합니다",
    success: true,
  },
];






export default function ReviewApp() {

  const [reviews, setReviews] = useState<Review[]>(initialReview);

  const [reviewInput, setReviewInput] = useState<Omit <Review, 'id' | 'name' |'success'>>({
    product: '',
    content: ''
  });

  const nextId = useRef<number>(4);

  // 목표 입력 변경 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setReviewInput({
      ...reviewInput,
      [name]: value
    })
  };

  // 목표 추가 핸들러
  const handleCreate = () => {
    const nextReview = {
      id: nextId.current,
      product: reviewInput.product,
      content: reviewInput.content,
      
    }
  }


  return <div>ReviewApp</div>;
}
