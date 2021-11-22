import { Menu, Button } from './DropdownUF_style.js';

export default function DropdownUF({ open, setOpen, setUf }) {
  function changeUf(e) {
    setOpen(!open);
    setUf(e.target.value);
  }
  return (
    <Menu>
      <Button onClick={(e) => changeUf(e)} value="RS">
        RS
      </Button>
      <Button onClick={(e) => changeUf(e)} value="SP">
        SP
      </Button>
      <Button onClick={(e) => changeUf(e)} value="SC">
        SC
      </Button>
      <Button onClick={(e) => changeUf(e)} value="PR">
        PR
      </Button>
      <Button onClick={(e) => changeUf(e)} value="RJ">
        RJ
      </Button>
      <Button onClick={(e) => changeUf(e)} value="MG">
        MG
      </Button>
      <Button onClick={(e) => changeUf(e)} value="CE">
        CE
      </Button>
      <Button onClick={(e) => changeUf(e)} value="AM">
        AM
      </Button>
      <Button onClick={(e) => changeUf(e)} value="MT">
        MT
      </Button>
      <Button onClick={(e) => changeUf(e)} value="MS">
        MS
      </Button>
      <Button onClick={(e) => changeUf(e)} value="PA">
        PA
      </Button>
      <Button onClick={(e) => changeUf(e)} value="BA">
        BA
      </Button>
      <Button onClick={(e) => changeUf(e)} value="TO">
        TO
      </Button>
      <Button onClick={(e) => changeUf(e)} value="RO">
        RO
      </Button>
      <Button onClick={(e) => changeUf(e)} value="RR">
        RR
      </Button>
      <Button onClick={(e) => changeUf(e)} value="AL">
        AL
      </Button>
      <Button onClick={(e) => changeUf(e)} value="AP">
        AP
      </Button>
      <Button onClick={(e) => changeUf(e)} value="DF">
        DF
      </Button>
      <Button onClick={(e) => changeUf(e)} value="ES">
        ES
      </Button>
      <Button onClick={(e) => changeUf(e)} value="GO">
        GO
      </Button>
      <Button onClick={(e) => changeUf(e)} value="PI">
        PI
      </Button>
      <Button onClick={(e) => changeUf(e)} value="PB">
        PB
      </Button>
      <Button onClick={(e) => changeUf(e)} value="PE">
        PE
      </Button>
      <Button onClick={(e) => changeUf(e)} value="RN">
        RN
      </Button>
      <Button onClick={(e) => changeUf(e)} value="AC">
        AC
      </Button>
      <Button onClick={(e) => changeUf(e)} value="MA">
        MA
      </Button>
      <Button onClick={(e) => changeUf(e)} value="SE">
        SE
      </Button>
    </Menu>
  );
}
