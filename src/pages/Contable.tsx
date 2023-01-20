import { DatePicker, Space, Input } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const onChange = (
  value: DatePickerProps["value"],
  dateString: [string, string] | string
) => {
  console.log("Fecha seleccionada: ", dateString);
};

const onOk = (value: DatePickerProps["value"]) => {
  console.log("onOk: ", value);
};

interface DataType {
  key: React.Key;
  destino: string;
  serie: string;
  numero: string;
  asiento: string;
  viaje: string;
  monto: string;
  cliente: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Destino",
    dataIndex: "destino",
  },
  {
    title: "Serie",
    dataIndex: "serie",
  },
  {
    title: "Numero",
    dataIndex: "numero",
  },
  { title: "Asiento", dataIndex: "asiento" },
  {
    title: "Viaje",
    dataIndex: "viaje",
  },
  { title: "Monto", dataIndex: "monto" },
  {
    title: "Cliente",
    dataIndex: "cliente",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    destino: `Huancayo ${i}`,
    serie: `B003 ${i}`,
    numero: `3370 ${i}`,
    asiento: `8 ${i}`,
    viaje: `1531 ${i}`,
    monto: `30 ${i}`,
    cliente: `759946700 ${i}`,
  });
}

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().endOf("day");
};
function Contable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div className="bg-[#F3F1EF] w-[1450px] h-auto rounded-l-xl">
      <div>
        <div>
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-xl font-bold leading-normal text-gray-800 font-Nunito pt-7 pl-12 ">
            Bienvenido de nuevo, Julio
          </p>
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800 font-Nunito pt-7 pl-12 ">
            Historial de Registros
          </p>
          <div className=" my-4 ml-12 flex  gap-3">
            <Space direction="vertical">
              <Input
                placeholder="Buscar"
                className="w-[350px] h-[35px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                suffix={<SearchOutlined className="cursor-pointer" />}
              />
            </Space>
            <div className="">
              <Space direction="vertical" size={12}>
                <DatePicker
                  className="cursor-pointer h-[35px] w-56 "
                  onChange={onChange}
                  onOk={onOk}
                  placeholder="Selecciona una fecha"
                />
              </Space>
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={loading}
              className="ml-12"
            >
              Reload
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>
          <Table
            className="mx-12"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  );
}

export default Contable;
