import { ProductColor } from "@/types/common";

export const data = {
  판매량: [
    { 월: "1월", 제품A: 120, 제품B: 150, 제품C: 80 },
    { 월: "2월", 제품A: 200, 제품B: 180, 제품C: 160 },
    { 월: "3월", 제품A: 150, 제품B: 210, 제품C: 190 },
  ],
  사용자피드백점수: [
    { 제품: "제품A", 점수: 4.5 },
    { 제품: "제품B", 점수: 4.7 },
    { 제품: "제품C", 점수: 4.3 },
  ],
  성능지표: [
    { 제품: "제품A", 배터리수명: "10시간", 처리속도: "빠름" },
    { 제품: "제품B", 배터리수명: "12시간", 처리속도: "보통" },
    { 제품: "제품C", 배터리수명: "8시간", 처리속도: "느림" },
  ],
};

export const salesVolumeData = {
  type: "bar",
  labels: data.판매량.map((item) => item.월),
  datasets: [
    {
      label: "제품A",
      data: data.판매량.map((item) => item.제품A),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "제품B",
      data: data.판매량.map((item) => item.제품B),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "제품C",
      data: data.판매량.map((item) => item.제품C),
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
  ],
};

export const productColors: ProductColor[] = [
  {
    색상: "빨강",
    이미지URL: "/images/red.webp",
  },
  {
    색상: "파랑",
    이미지URL: "/images/blue.jpg",
  },
  {
    색상: "녹색",
    이미지URL: "/images/green.webp",
  },
];
