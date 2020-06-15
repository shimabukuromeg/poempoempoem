import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { PoemList } from "./components/PoemList";

const accountId = "aaaaa";
const poems = [
  {
    id: 1,
    accountId: "太郎",
    postDate: "September 14, 2016",
    text:
      "OYATSUYA SUNの梅澤さんにスキマ時間でも、さっと作れる簡単おやつレシピを教えていただきました♪今回ご紹介する「ミルクもち」は、わらびもちと白玉のあいだのような、ぷるぷるとした食感が楽しいおやつ。疲れを癒してくれるような、優しい味わいです。",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAA3NCSVQICAjb4U/gAAAADFBMVEU7lNn///9sr+O82/LTGmJ0AAAAAWJLR0QAiAUdSAAABltJREFUeJzt2tt2IkkMRFFT/P8/d5cLDDa3umRmhKSz3+bNRCxJCdNfXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwwHSh/jswnc+nP85netGYHrq4a4VSxpqm12VcscGGWdHGpRP1X1rBu03F7hpuWx2MSW/b66CSjvbVcWJx9bH6lD+tRP3Xp3OojhlD0tTubcWQ9HB4PBYMSSON+mBIGmmwrn6oP0sCzcZjwdo6qHEfrK2DmvdBI4e0PB836k8VV58+OCR7darjxIzs02s+ZszIdh3rODEj2/XtgxnZqncfzMg2Pe8HjWw3og8aWa/D93MaOWBUHzSyzrg++F1rlXF98PhdY2QfNPLZmAfWjfrzuht4QGhkhfF9cNjfGt8HZ+Sd0Qdkof7UvgQLi0beEfXBGXlB1Qdn5DnNAVmoP7sj1QH5xtJ6pOyDpfVIOiAnltYDcR8srT/UfbC0flMvrJk6AyvqMmYsrRvlV5AbltYPdRUX6hhsqIu4YkQWDhd9oU7ChLqGG0Zk5jMgjMg3dQn3ePq6PHmvWFpWA8KIuA0II2I2IKfyd91tQKqPiNOT90qdiZTfgBQfEXX4T6lDEXIckNIjoo7+BXUsMp4DUnhE1MG/pA5GxPHNuyg6IurYX6v5i5bvgBTdWerQ36k4Is4DUnJEXN+8i4JnXR35B+p4hvMekIIjog78I3VAg3mf9Jk6ocHUcX9W7OWrjnsFdURDuZ/0Wamzrg57FXVIA/mf9FmhEYmwsUoVoo56JXVMw8TYWIVGRB30WmW+iqiDXk0d1CBRNlaZnaWOeb0aOyvOgBTZWTG+hCxK7Cx1yJuowxog0sYqUUikjVViZ6kj3ib/OyvWxiqws6IVkn5nqQPeKv3OUge8mTqwzqJtrPQ7Sx3vdsl3ljreHdSRdRVvYyXfWbG+pi9SF6IOd4/UR0Qd7i7q0DqKeEJS7yx1tPtQiBt1bN3E3FgUYiftzlIHu1fah6862N3UwXUSdWNRiJ2kR0Qd635Jj4g61gPU0XURd2NRiB11dl1E/H8hVymvujrUI1JedXWoh6jD6yDyCUlZSOQTkvKIqCM9hkLMJLzq6kgPUsfXXOybnrCQ2Dc94RFRB3oUhZhJd9XVgR6mDrCx6DedQuyoE2ws+iMr3VVXx3kchZhJ9sxSx9mAOsKm4t90CrGjzrCp+I+sZFedQsyow2yBQsxkevdmuOmpCkkxIZmeWSkmhELcqFNsiELMZPgakqoQJsSMOso2En0zVEfZBoWYoRAzFGKGQswk+jFLHWUbFGKGQsxwQ8wwIWaYEDNMiBkKMUMhZijEDEfdDIWYoRAzFGKGQsyoU2yIfwZkhkLMUIgZ/qGcmRSFJPrlhELsqMNsIdHXEAqxow6zBQoxo86wqQxfRNQZNpXhmaXOsKkEhaQ6IRmOCIWYSVZI/KuuTrCx+EdEnWBj4QtJ9UvWTB3oUclOSPxC1Pk1F/2qq/NrLvgRSXdCoheS7oREPyIJC4l9RNTpdRB6Z+U7IV+xd1bCjRV7Z6mz6yLwzkq5sSIXknJjRT4i6uQ6CTsiOTdW4EKSbqy47yx1bt0EHZGsGytsIWk3VtSdpU6to5AjknhAYn4VUWfWVcARyXvSv6nj3U6dWGfxzro6sc7C7azUJ30WbUTUefWnTnib9AMSbUTUaQ0Q6ooUGJBYI6LOagx1yuuVGJBAI5L8S/qNOui1igxImBEpMyBRRkSd0kAhnr5lFtYswtJSZzSWOu3PSg1IgKVVrA//EVHnM5468ffKDYj50ir0FeTG+aWlzkZDnfpr6mREbJdWwQOyMG2k5AFZeJ4RdSpK6uyfUWeipU7/kToRNXX+f5U96Fdmh718H2aN0MeX1VOr8IP3nk0j9HFh0gh9/LBohD7uGDRCH7/I31r08Ye4Ed67D6SN0Mcz9OFG1Yf6c/uSPLY4528IDgnr6r3Rfag/r7+ha4t1tcLAtcW6WmfQkDAeqw0ZEsZji+5Dwnhs1bUS6tih495iW+0z9ZkS6tivw5RQxzGNK6GOBpotrjN1NNJiTGijqelgJxN1NLe/E8roZvtDmE3V27S+lDOLapSPrdCFwvS/l/OvZv7/50QVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOMfLrimg976YngAAAAASUVORK5CYII=",
    likeCount: 22,
  },
  {
    id: 2,
    accountId: "三郎",
    postDate: "September 14, 2020",
    text:
      "お写真からも分かるように、お店の窓を開けるとすぐ目の前に広がる海の絶景を堪能できます🏝遠浅の海は、潮の満ち引きや陽の傾きによって様々な美しい表情を見せてくれます💕",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAA3NCSVQICAjb4U/gAAAADFBMVEU7lNn///9sr+O82/LTGmJ0AAAAAWJLR0QAiAUdSAAABltJREFUeJzt2tt2IkkMRFFT/P8/d5cLDDa3umRmhKSz3+bNRCxJCdNfXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwwHSh/jswnc+nP85netGYHrq4a4VSxpqm12VcscGGWdHGpRP1X1rBu03F7hpuWx2MSW/b66CSjvbVcWJx9bH6lD+tRP3Xp3OojhlD0tTubcWQ9HB4PBYMSSON+mBIGmmwrn6oP0sCzcZjwdo6qHEfrK2DmvdBI4e0PB836k8VV58+OCR7darjxIzs02s+ZszIdh3rODEj2/XtgxnZqncfzMg2Pe8HjWw3og8aWa/D93MaOWBUHzSyzrg++F1rlXF98PhdY2QfNPLZmAfWjfrzuht4QGhkhfF9cNjfGt8HZ+Sd0Qdkof7UvgQLi0beEfXBGXlB1Qdn5DnNAVmoP7sj1QH5xtJ6pOyDpfVIOiAnltYDcR8srT/UfbC0flMvrJk6AyvqMmYsrRvlV5AbltYPdRUX6hhsqIu4YkQWDhd9oU7ChLqGG0Zk5jMgjMg3dQn3ePq6PHmvWFpWA8KIuA0II2I2IKfyd91tQKqPiNOT90qdiZTfgBQfEXX4T6lDEXIckNIjoo7+BXUsMp4DUnhE1MG/pA5GxPHNuyg6IurYX6v5i5bvgBTdWerQ36k4Is4DUnJEXN+8i4JnXR35B+p4hvMekIIjog78I3VAg3mf9Jk6ocHUcX9W7OWrjnsFdURDuZ/0Wamzrg57FXVIA/mf9FmhEYmwsUoVoo56JXVMw8TYWIVGRB30WmW+iqiDXk0d1CBRNlaZnaWOeb0aOyvOgBTZWTG+hCxK7Cx1yJuowxog0sYqUUikjVViZ6kj3ib/OyvWxiqws6IVkn5nqQPeKv3OUge8mTqwzqJtrPQ7Sx3vdsl3ljreHdSRdRVvYyXfWbG+pi9SF6IOd4/UR0Qd7i7q0DqKeEJS7yx1tPtQiBt1bN3E3FgUYiftzlIHu1fah6862N3UwXUSdWNRiJ2kR0Qd635Jj4g61gPU0XURd2NRiB11dl1E/H8hVymvujrUI1JedXWoh6jD6yDyCUlZSOQTkvKIqCM9hkLMJLzq6kgPUsfXXOybnrCQ2Dc94RFRB3oUhZhJd9XVgR6mDrCx6DedQuyoE2ws+iMr3VVXx3kchZhJ9sxSx9mAOsKm4t90CrGjzrCp+I+sZFedQsyow2yBQsxkevdmuOmpCkkxIZmeWSkmhELcqFNsiELMZPgakqoQJsSMOso2En0zVEfZBoWYoRAzFGKGQswk+jFLHWUbFGKGQsxwQ8wwIWaYEDNMiBkKMUMhZijEDEfdDIWYoRAzFGKGQsyoU2yIfwZkhkLMUIgZ/qGcmRSFJPrlhELsqMNsIdHXEAqxow6zBQoxo86wqQxfRNQZNpXhmaXOsKkEhaQ6IRmOCIWYSVZI/KuuTrCx+EdEnWBj4QtJ9UvWTB3oUclOSPxC1Pk1F/2qq/NrLvgRSXdCoheS7oREPyIJC4l9RNTpdRB6Z+U7IV+xd1bCjRV7Z6mz6yLwzkq5sSIXknJjRT4i6uQ6CTsiOTdW4EKSbqy47yx1bt0EHZGsGytsIWk3VtSdpU6to5AjknhAYn4VUWfWVcARyXvSv6nj3U6dWGfxzro6sc7C7azUJ30WbUTUefWnTnib9AMSbUTUaQ0Q6ooUGJBYI6LOagx1yuuVGJBAI5L8S/qNOui1igxImBEpMyBRRkSd0kAhnr5lFtYswtJSZzSWOu3PSg1IgKVVrA//EVHnM5468ffKDYj50ir0FeTG+aWlzkZDnfpr6mREbJdWwQOyMG2k5AFZeJ4RdSpK6uyfUWeipU7/kToRNXX+f5U96Fdmh718H2aN0MeX1VOr8IP3nk0j9HFh0gh9/LBohD7uGDRCH7/I31r08Ye4Ed67D6SN0Mcz9OFG1Yf6c/uSPLY4528IDgnr6r3Rfag/r7+ha4t1tcLAtcW6WmfQkDAeqw0ZEsZji+5Dwnhs1bUS6tih495iW+0z9ZkS6tivw5RQxzGNK6GOBpotrjN1NNJiTGijqelgJxN1NLe/E8roZvtDmE3V27S+lDOLapSPrdCFwvS/l/OvZv7/50QVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOMfLrimg976YngAAAAASUVORK5CYII=",
    likeCount: 33,
  },
];

function App() {
  return (
    <div className="App">
      <Header accountId={accountId}></Header>
      <PoemList poems={poems}></PoemList>
    </div>
  );
}

export default App;
