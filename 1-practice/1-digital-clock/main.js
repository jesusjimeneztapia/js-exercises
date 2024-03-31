import "@fontsource-variable/inter";
import "@fontsource/dseg7-classic-mini";
import "./style.css";

const getElementById = (id) => document.querySelector(`#${id}`);

const $date = getElementById("date");
const $time = getElementById("time");

const createTime = (date = new Date()) => {
  const time = date
    .toLocaleTimeString("es", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .split(" ")[0];
  return time
    .split(":")
    .map((item) =>
      item
        .split("")
        .map((number) => `<span class="number">${number}</span>`)
        .join("")
    )
    .join(":");
};

const getCycle = (date = new Date()) => (date.getHours() > 12 ? "PM" : "AM");
const createCycle = (date = new Date()) =>
  `<span class="cycle">${getCycle(date)}</span>`;

setInterval(() => {
  const now = new Date();
  $date.innerHTML = now.toLocaleDateString("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  $time.innerHTML = `${createTime(now)}${createCycle(now)}`;
}, 1000);
