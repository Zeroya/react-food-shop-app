import { IDropDown } from "@models/ICard";
import { sortObj } from "@models/ICard";

export const selectArr: Array<IDropDown> = [
  {
    tag: "Fish",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
  {
    tag: "Herbs",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
  {
    tag: "Vegetable",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
  {
    tag: "Fruit",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
  {
    tag: "Pasta",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
  {
    tag: "Cheese",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
  {
    tag: "Main dish",
    menu: [
      {
        label: "Grocery Tarm Fields",
        key: "1",
      },
      {
        label: "ArabVanya",
        key: "2",
      },
      {
        label: "Iuda Production",
        key: "3",
      },
      {
        label: "Lanselot Farm",
        key: "4",
      },
      {
        label: "Tor Farm",
        key: "5",
      },
    ],
  },
];

export const infoArr: Array<{ header: string; text: Array<string> }> = [
  { header: "Get in touch", text: ["About Us", "Careers", "Press Releases", "Blog"] },
  { header: "Connections", text: ["Facebook", "Twitter", "Instagram", "Youtube", "LinkedIn"] },
  { header: "Earnings", text: ["Become an Affiliate", "Advertise your product", "Sell on Market"] },
  {
    header: "Account",
    text: ["Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help"],
  },
];
export const tagsArr: Array<string> = [
  "Beans",
  "Carrots",
  "Apples",
  "Garlic",
  "Mushrooms",
  "Tomatoes",
  "Chilli peppers",
  "Broccoli",
  "Watermelons",
  "Oranges",
  "Bananas",
  "Grapes",
  "Cherries",
  "Meat",
  "Seo tag",
  "Fish",
  "Fresh food",
  "Lemons",
];

export const starsArr: Array<{ value: number; checked: boolean }> = [
  { value: 5, checked: false },
  { value: 4, checked: false },
  { value: 3, checked: false },
  { value: 2, checked: false },
  { value: 1, checked: false },
];

export const sortArr: Array<sortObj> = [
  { name: "↓name", checked: false, value: "name" },
  { name: "↑name", checked: true, value: "name" },
  { name: "↓price", checked: false, value: "price" },
  { name: "↑price", checked: true, value: "price" },
  { name: "↓discount", checked: false, value: "discount" },
  { name: "↑discount", checked: true, value: "discount" },
  { name: "↓popularity", checked: false, value: "popularity" },
  { name: "↑popularity", checked: true, value: "popularity" },
  { name: "↓delivery", checked: false, value: "delivery" },
  { name: "↑delivery", checked: true, value: "delivery" },
  { name: "↓stock", checked: false, value: "stock" },
  { name: "↑stock", checked: true, value: "stock" },
];
