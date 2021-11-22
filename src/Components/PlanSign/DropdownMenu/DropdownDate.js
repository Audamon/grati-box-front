import { useEffect, useState } from 'react';
import { getDeliveryDays } from '../../../Services/Api.js';
import { Menu, Button } from './DropdownDate_style.js';

export default function DropdownDate({
  setDate, setOpenDate, openDate, plan,
}) {
  const [days, setDays] = useState([]);
  useEffect(() => {
    setDays(['Entrega']);
    const promise = getDeliveryDays(plan.toLowerCase());
    promise.then((res) => {
      setDays([...res.data]);
    });
  }, [plan]);
  function setDateDate(index) {
    setDate(days[index].date);
    setOpenDate(!openDate);
  }
  return (
    <Menu>
      {days.map((day, index) => <Button key={index} onClick={() => setDateDate(index)}>{day.date}</Button>)}
    </Menu>
  );
}
