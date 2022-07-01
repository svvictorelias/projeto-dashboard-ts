import ReactApexChart, { Props } from "react-apexcharts";
import React from "react";
import { DashboardContainer, IconContainer, TooltipBox, TooltipCard, TooltipText } from "../../style/CommunsStyle";
import { IoMdInformationCircleOutline } from "react-icons/io";


const AreaCharts: React.FC<Props> = () => {
    const options = {
        title: {
            text: 'Áreas',
            style:{
                fontSize: '18px', 
                fontFamily: "'Inconsolata', monospace",
                color: 'var(--color-primary)'
            }
        },
      colors: ['var(--color-primary)', 'var(--color-secundary)'],
      chart: {
        toolbar: false,
        zoom: {
          enabled: true,
        }
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['var(--color-primary)', 'var(--color-secundary-light)'],
        },
      },
    };
  
    const series = [
      {
        name: "Total de vendas",
        data: [31, 40, 58, 51, 42, 79, 100]
      },
      {
        name: "Minhas vendas",
        data: [11, 32, 45, 32, 34, 32, 41]
      }
    ];
  
    return (
      <DashboardContainer>
      <TooltipCard>
          <TooltipText>
            <IconContainer>
              <IoMdInformationCircleOutline id="icon"/>
            </IconContainer>
          </TooltipText>
          <TooltipBox>
            <h5>Dashboard em Áreas com dados de vendas totais e individuais</h5>
          </TooltipBox>
        </TooltipCard>
        <ReactApexChart
          type="area"
          options={options}
          series={series}
          height={350}
          width={550}
        />
        
      </DashboardContainer>
    );
  };

  export default AreaCharts