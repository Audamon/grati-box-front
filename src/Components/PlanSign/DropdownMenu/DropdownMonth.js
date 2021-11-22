import { Menu, Button } from './DropdownMonth_style.js';

export default function DropdownMonth({ setPlan, setOpenPlan, openPlan }) {
  function setPlanMonthly() {
    setPlan('Mensal');
    setOpenPlan(!openPlan);
  }
  function setPlanPlan() {
    setPlan('Plano');
    setOpenPlan(!openPlan);
  }
  function setPlanWeekly() {
    setPlan('Semanal');
    setOpenPlan(!openPlan);
  }
  return (
      <Menu>
          <Button onClick={setPlanPlan}>Plano</Button>
          <Button onClick={setPlanMonthly}>Mensal</Button>
          <Button onClick={setPlanWeekly}>Semanal</Button>
      </Menu>
  );
}
