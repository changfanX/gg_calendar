import Vue from 'vue'
import {Container,
  Header,
  Aside,
  Main,
  Button,
  Calendar,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Table,
  TableColumn,
  Dialog,
  Row,
  Form,
  FormItem,
  Input,
  
} from 'element-ui';

const items = [
  Container,
  Header,
  Aside,
  Main,
  Button,
  Calendar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
  Dialog,
  Row,
  Form,
  FormItem,
  Input
]

for (const item of items){
  Vue.use(item)
}