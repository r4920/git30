import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { List } from "components/List";

const NavigationPage = () => {
  const handleNavigate2 = () => {
    window.location.href = "sd.com";
  };
  const handleNavigate1 = () => {
    window.location.href = "sdf.in";
  };

  return (
    <Column
      className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]"
      compId="1930:26472"
      comWidth={1400}
      compLeft={0}
      compRight={0}
      compType="Column"
    >
      <Column
        className="2xl:mb-[258px] 2xl:mt-[73px] 3xl:mb-[310px] 3xl:mt-[87px] font-poppins justify-start lg:mb-[201px] lg:mt-[56px] mb-[184px] mt-[52px] self-stretch w-[100%] xl:mb-[230px] xl:mt-[65px]"
        compId="42"
        comWidth={1400}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center self-stretch w-[100%]"
          compId="44"
          comWidth={1400}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="font-poppins justify-start self-stretch w-[100%]"
            compId="22"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <div
              className="2xl:h-[68px] 2xl:mb-[71px] 2xl:ml-[54px] 3xl:h-[82px] 3xl:mb-[86px] 3xl:ml-[65px] bg-gray_400 h-[48px] lg:h-[53px] lg:mb-[55px] lg:ml-[42px] mb-[51px] ml-[39px] w-[3%] xl:h-[61px] xl:mb-[63px] xl:ml-[48px]"
              compId="2418:26173"
              comWidth={47}
              compLeft={39}
              compRight={0}
              compType="View"
            ></div>
            <Text
              className="common-pointer 2xl:mt-[67px] 2xl:text-fs56 3xl:mt-[81px] 3xl:text-fs67 font-bold lg:mt-[52px] lg:text-fs43 mt-[48px] text-fs40 text-gray_900 text-left xl:mt-[60px] xl:text-fs50"
              compId="1930:26473"
              comWidth={163}
              compLeft={0}
              compRight={0}
              compType="Text"
              onClick={handleNavigate2}
            >{`General`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[230px] 2xl:mt-[94px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[276px] 3xl:mt-[113px] 3xl:text-fs30 font-normal lg:ml-[179px] lg:mt-[73px] lg:text-fs19 mb-[8px] ml-[164px] mt-[67px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[205px] xl:mt-[83px] xl:text-fs22"
              compId="1930:26475"
              comWidth={109}
              compLeft={164}
              compRight={0}
              compType="Text"
            >{`Typography`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[75px] 2xl:mt-[94px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[91px] 3xl:mt-[113px] 3xl:text-fs30 font-normal lg:ml-[59px] lg:mt-[73px] lg:text-fs19 mb-[8px] ml-[54px] mt-[67px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[67px] xl:mt-[83px] xl:text-fs22"
              compId="1930:26476"
              comWidth={58}
              compLeft={54}
              compRight={0}
              compType="Text"
            >{`Colors`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[191px] 2xl:mr-[803px] 2xl:mt-[94px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[229px] 3xl:mr-[964px] 3xl:mt-[113px] 3xl:text-fs30 font-normal lg:ml-[148px] lg:mr-[624px] lg:mt-[73px] lg:text-fs19 mb-[8px] ml-[136px] mr-[571px] mt-[67px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[170px] xl:mr-[714px] xl:mt-[83px] xl:text-fs22"
              compId="1930:26491"
              comWidth={59}
              compLeft={136}
              compRight={571}
              compType="Text"
            >{`Button`}</Text>
          </Row>
          <Row
            className="2xl:mt-[33px] 3xl:mt-[40px] font-poppins items-center justify-center lg:mt-[26px] mt-[24px] self-stretch w-[100%] xl:mt-[30px]"
            compId="3"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal lg:ml-[451px] lg:text-fs19 ml-[413px] text-fs18 text-gray_900 text-left underline xl:ml-[516px] xl:text-fs22"
              compId="1930:26494"
              comWidth={38}
              compLeft={413}
              compRight={0}
              compType="Text"
            >{`Grid`}</Text>
            <Text
              className="2xl:ml-[175px] 2xl:text-fs25 3xl:ml-[211px] 3xl:text-fs30 font-normal lg:ml-[136px] lg:text-fs19 ml-[125px] text-fs18 text-gray_900 text-left underline xl:ml-[156px] xl:text-fs22"
              compId="1930:26495"
              comWidth={60}
              compLeft={125}
              compRight={0}
              compType="Text"
            >{`Layout`}</Text>
            <Text
              className="2xl:ml-[188px] 2xl:mr-[707px] 2xl:text-fs25 3xl:ml-[226px] 3xl:mr-[849px] 3xl:text-fs30 font-normal lg:ml-[146px] lg:mr-[550px] lg:text-fs19 ml-[134px] mr-[503px] text-fs18 text-gray_900 text-left underline xl:ml-[167px] xl:mr-[629px] xl:text-fs22"
              compId="1930:26496"
              comWidth={127}
              compLeft={134}
              compRight={503}
              compType="Text"
            >{`Corner Radius`}</Text>
          </Row>
          <Row
            className="2xl:mt-[45px] 3xl:mt-[54px] font-poppins justify-start lg:mt-[35px] mt-[32px] self-stretch w-[100%] xl:mt-[40px]"
            compId="39"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="common-pointer 2xl:mb-[97px] 2xl:ml-[121px] 2xl:mt-[125px] 2xl:text-fs56 3xl:mb-[116px] 3xl:ml-[145px] 3xl:mt-[150px] 3xl:text-fs67 font-bold lg:mb-[75px] lg:ml-[94px] lg:mt-[97px] lg:text-fs43 mb-[69px] ml-[86px] mt-[89px] text-fs40 text-gray_900 text-left xl:mb-[86px] xl:ml-[107px] xl:mt-[111px] xl:text-fs50"
              compId="1930:26498"
              comWidth={264}
              compLeft={86}
              compRight={0}
              compType="Text"
              onClick={handleNavigate1}
            >{`Basic components`}</Text>
            <Column
              className="2xl:ml-[88px] 2xl:mr-[752px] 3xl:ml-[106px] 3xl:mr-[903px] font-poppins justify-start lg:ml-[68px] lg:mr-[585px] ml-[63px] mr-[535px] w-[32%] xl:ml-[78px] xl:mr-[669px]"
              compId="35"
              comWidth={452}
              compLeft={63}
              compRight={535}
              compType="Column"
            >
              <Text
                className="2xl:mr-[14px] 2xl:text-fs25 3xl:mr-[16px] 3xl:text-fs30 font-normal lg:text-fs19 mr-[10px] text-fs18 text-gray_900 text-left underline xl:mr-[12px] xl:text-fs22"
                compId="1930:26497"
                comWidth={73}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Shadow`}</Text>
              <Column
                className="2xl:mt-[109px] 3xl:mt-[131px] items-center lg:mt-[85px] mt-[78px] self-stretch w-[100%] xl:mt-[97px]"
                compId="46"
                comWidth={452}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <List
                  className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
                  compId="43"
                  comWidth={452}
                  compLeft={0}
                  compRight={0}
                  compType="List"
                  orientation="vertical"
                >
                  <Row
                    className="2xl:my-[22px] 3xl:my-[27px] font-poppins items-center justify-start lg:my-[17px] my-[16px] w-[100%] xl:my-[20px]"
                    compId="4"
                    comWidth={451}
                    compLeft={0}
                    compRight={1}
                    compType="Row"
                  >
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26499"
                      comWidth={49}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Scroll`}</Text>
                    <Text
                      className="2xl:ml-[160px] 2xl:text-fs25 3xl:ml-[192px] 3xl:text-fs30 font-normal lg:ml-[124px] lg:text-fs19 ml-[114px] text-fs18 text-gray_900 text-left underline xl:ml-[142px] xl:text-fs22"
                      compId="1930:26500"
                      comWidth={47}
                      compLeft={114}
                      compRight={0}
                      compType="Text"
                    >{`Input`}</Text>
                    <Text
                      className="2xl:ml-[206px] 2xl:text-fs25 3xl:ml-[248px] 3xl:text-fs30 font-normal lg:ml-[160px] lg:text-fs19 ml-[147px] text-fs18 text-gray_900 text-left underline xl:ml-[183px] xl:text-fs22"
                      compId="1930:26501"
                      comWidth={94}
                      compLeft={147}
                      compRight={0}
                      compType="Text"
                    >{`Dropdown`}</Text>
                  </Row>
                  <Row
                    className="2xl:mr-[37px] 2xl:my-[22px] 3xl:mr-[45px] 3xl:my-[27px] font-poppins items-center justify-between lg:mr-[29px] lg:my-[17px] mr-[27px] my-[16px] px-[0] w-[94%] xl:mr-[33px] xl:my-[20px]"
                    compId="5"
                    comWidth={425}
                    compLeft={0}
                    compRight={27}
                    compType="Row"
                  >
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26502"
                      comWidth={90}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Checkbox`}</Text>
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26503"
                      comWidth={112}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Radiobutton`}</Text>
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26504"
                      comWidth={68}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Toggler`}</Text>
                  </Row>
                  <Row
                    className="2xl:my-[22px] 3xl:my-[27px] font-poppins items-center justify-between lg:my-[17px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[20px]"
                    compId="6"
                    comWidth={452}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26505"
                      comWidth={85}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Calendar`}</Text>
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26509"
                      comWidth={104}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Data picker`}</Text>
                    <Text
                      className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                      compId="1930:26510"
                      comWidth={95}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Time picer`}</Text>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
          <Row
            className="2xl:mt-[45px] 3xl:mt-[54px] font-poppins items-center justify-start lg:mt-[35px] mt-[32px] self-stretch w-[100%] xl:mt-[40px]"
            compId="7"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal lg:ml-[451px] lg:text-fs19 ml-[413px] text-fs18 text-gray_900 text-left underline xl:ml-[516px] xl:text-fs22"
              compId="1930:26511"
              comWidth={112}
              compLeft={413}
              compRight={0}
              compType="Text"
            >{`Range slider`}</Text>
            <Text
              className="2xl:ml-[71px] 2xl:text-fs25 3xl:ml-[86px] 3xl:text-fs30 font-normal lg:ml-[55px] lg:text-fs19 ml-[51px] text-fs18 text-gray_900 text-left underline xl:ml-[63px] xl:text-fs22"
              compId="1930:26512"
              comWidth={78}
              compLeft={51}
              compRight={0}
              compType="Text"
            >{`Progress`}</Text>
            <Text
              className="2xl:ml-[163px] 2xl:mr-[795px] 2xl:text-fs25 3xl:ml-[195px] 3xl:mr-[953px] 3xl:text-fs30 font-normal lg:ml-[126px] lg:mr-[617px] lg:text-fs19 ml-[116px] mr-[565px] text-fs18 text-gray_900 text-left underline xl:ml-[145px] xl:mr-[706px] xl:text-fs22"
              compId="1930:26513"
              comWidth={65}
              compLeft={116}
              compRight={565}
              compType="Text"
            >{`Upload`}</Text>
          </Row>
          <Row
            className="2xl:mt-[45px] 3xl:mt-[54px] font-poppins items-center justify-center lg:mt-[35px] mt-[32px] self-stretch w-[100%] xl:mt-[40px]"
            compId="8"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal lg:ml-[451px] lg:text-fs19 ml-[413px] text-fs18 text-gray_900 text-left underline xl:ml-[516px] xl:text-fs22"
              compId="1930:26514"
              comWidth={41}
              compLeft={413}
              compRight={0}
              compType="Text"
            >{`Rate`}</Text>
            <Text
              className="2xl:ml-[171px] 2xl:mr-[937px] 2xl:text-fs25 3xl:ml-[205px] 3xl:mr-[1124px] 3xl:text-fs30 font-normal lg:ml-[133px] lg:mr-[728px] lg:text-fs19 ml-[122px] mr-[666px] text-fs18 text-gray_900 text-left underline xl:ml-[152px] xl:mr-[833px] xl:text-fs22"
              compId="1930:26515"
              comWidth={158}
              compLeft={122}
              compRight={666}
              compType="Text"
            >{`Arrow Back to top`}</Text>
          </Row>
          <Row
            className="2xl:mt-[91px] 3xl:mt-[109px] font-poppins justify-start lg:mt-[71px] mt-[65px] self-stretch w-[100%] xl:mt-[81px]"
            compId="23"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[121px] 2xl:text-fs56 3xl:ml-[145px] 3xl:text-fs67 font-bold lg:ml-[94px] lg:text-fs43 ml-[86px] text-fs40 text-gray_900 text-left xl:ml-[107px] xl:text-fs50"
              compId="1930:26516"
              comWidth={134}
              compLeft={86}
              compRight={0}
              compType="Text"
            >{`Image`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[271px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[325px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[211px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[193px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[241px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26517"
              comWidth={48}
              compLeft={193}
              compRight={0}
              compType="Text"
            >{`Icons`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[161px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[194px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[125px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[115px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[143px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26518"
              comWidth={43}
              compLeft={115}
              compRight={0}
              compType="Text"
            >{`Logo`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[212px] 2xl:mr-[803px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[254px] 3xl:mr-[964px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[165px] lg:mr-[624px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[151px] mr-[571px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[188px] xl:mr-[714px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26519"
              comWidth={59}
              compLeft={151}
              compRight={571}
              compType="Text"
            >{`Image`}</Text>
          </Row>
        </Column>
        <Text
          className="2xl:mt-[33px] 2xl:mx-[581px] 2xl:text-fs25 3xl:mt-[40px] 3xl:mx-[697px] 3xl:text-fs30 font-normal lg:mt-[26px] lg:mx-[451px] lg:text-fs19 mt-[24px] mx-[413px] text-fs18 text-gray_900 text-left underline xl:mt-[30px] xl:mx-[516px] xl:text-fs22"
          compId="1930:26520"
          comWidth={60}
          compLeft={413}
          compRight={413}
          compType="Text"
        >{`Avatar`}</Text>
        <Column
          className="2xl:mt-[91px] 3xl:mt-[109px] items-center lg:mt-[71px] mt-[65px] self-stretch w-[100%] xl:mt-[81px]"
          compId="45"
          comWidth={1400}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="font-poppins justify-start self-stretch w-[100%]"
            compId="40"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:mb-[175px] 2xl:ml-[121px] 2xl:text-fs56 3xl:mb-[211px] 3xl:ml-[145px] 3xl:text-fs67 font-bold lg:mb-[136px] lg:ml-[94px] lg:text-fs43 mb-[125px] ml-[86px] text-fs40 text-gray_900 text-left xl:mb-[156px] xl:ml-[107px] xl:text-fs50"
              compId="1930:26524"
              comWidth={165}
              compLeft={86}
              compRight={0}
              compType="Text"
            >{`Data display`}</Text>
            <List
              className="2xl:ml-[227px] 2xl:mr-[779px] 2xl:mt-[18px] 3xl:ml-[273px] 3xl:mr-[935px] 3xl:mt-[21px] flex-wrap gap-[0] lg:ml-[177px] lg:mr-[605px] lg:mt-[14px] min-h-[auto] ml-[162px] mr-[554px] mt-[13px] w-[31%] xl:ml-[202px] xl:mr-[693px] xl:mt-[16px]"
              compId="37"
              comWidth={433}
              compLeft={162}
              compRight={554}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="2xl:mr-[52px] 2xl:my-[22px] 3xl:mr-[62px] 3xl:my-[27px] font-poppins items-center justify-between lg:mr-[40px] lg:my-[17px] mr-[37px] my-[16px] px-[0] w-[91%] xl:mr-[46px] xl:my-[20px]"
                compId="11"
                comWidth={396}
                compLeft={0}
                compRight={37}
                compType="Row"
              >
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26525"
                  comWidth={59}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Badge`}</Text>
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26526"
                  comWidth={80}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Collapse`}</Text>
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26527"
                  comWidth={39}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Tree`}</Text>
              </Row>
              <Row
                className="2xl:mr-[57px] 2xl:my-[22px] 3xl:mr-[69px] 3xl:my-[27px] font-poppins items-center justify-start lg:mr-[44px] lg:my-[17px] mr-[41px] my-[16px] w-[91%] xl:mr-[51px] xl:my-[20px]"
                compId="12"
                comWidth={392}
                compLeft={0}
                compRight={41}
                compType="Row"
              >
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26528"
                  comWidth={50}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Table`}</Text>
                <Text
                  className="2xl:ml-[159px] 2xl:text-fs25 3xl:ml-[190px] 3xl:text-fs30 font-normal lg:ml-[123px] lg:text-fs19 ml-[113px] text-fs18 text-gray_900 text-left underline xl:ml-[141px] xl:text-fs22"
                  compId="1930:26529"
                  comWidth={44}
                  compLeft={113}
                  compRight={0}
                  compType="Text"
                >{`Tabs`}</Text>
                <Text
                  className="2xl:ml-[211px] 2xl:text-fs25 3xl:ml-[253px] 3xl:text-fs30 font-normal lg:ml-[164px] lg:text-fs19 ml-[150px] text-fs18 text-gray_900 text-left underline xl:ml-[187px] xl:text-fs22"
                  compId="1930:26530"
                  comWidth={35}
                  compLeft={150}
                  compRight={0}
                  compType="Text"
                >{`Tag`}</Text>
              </Row>
              <Row
                className="2xl:my-[22px] 3xl:my-[27px] font-poppins items-center justify-start lg:my-[17px] my-[16px] self-stretch w-[100%] xl:my-[20px]"
                compId="13"
                comWidth={433}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26531"
                  comWidth={61}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Tooltip`}</Text>
                <Text
                  className="2xl:ml-[143px] 2xl:text-fs25 3xl:ml-[172px] 3xl:text-fs30 font-normal lg:ml-[111px] lg:text-fs19 ml-[102px] text-fs18 text-gray_900 text-left underline xl:ml-[127px] xl:text-fs22"
                  compId="1930:26532"
                  comWidth={41}
                  compLeft={102}
                  compRight={0}
                  compType="Text"
                >{`Step`}</Text>
                <Text
                  className="2xl:ml-[215px] 2xl:text-fs25 3xl:ml-[258px] 3xl:text-fs30 font-normal lg:ml-[167px] lg:text-fs19 ml-[153px] text-fs18 text-gray_900 text-left underline xl:ml-[191px] xl:text-fs22"
                  compId="1930:26533"
                  comWidth={76}
                  compLeft={153}
                  compRight={0}
                  compType="Text"
                >{`Timeline`}</Text>
              </Row>
              <Row
                className="2xl:mr-[46px] 2xl:my-[22px] 3xl:mr-[55px] 3xl:my-[27px] font-poppins items-center justify-between lg:mr-[36px] lg:my-[17px] mr-[33px] my-[16px] px-[0] w-[92%] xl:mr-[41px] xl:my-[20px]"
                compId="14"
                comWidth={400}
                compLeft={0}
                compRight={33}
                compType="Row"
              >
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26534"
                  comWidth={40}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`User`}</Text>
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26535"
                  comWidth={64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Serach`}</Text>
                <Text
                  className="2xl:text-fs25 3xl:text-fs30 font-normal lg:text-fs19 text-fs18 text-gray_900 text-left underline xl:text-fs22"
                  compId="1930:26536"
                  comWidth={43}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Filter`}</Text>
              </Row>
            </List>
          </Row>
          <Row
            className="2xl:mt-[45px] 3xl:mt-[54px] font-poppins items-center justify-start lg:mt-[35px] mt-[32px] self-stretch w-[100%] xl:mt-[40px]"
            compId="15"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal lg:ml-[451px] lg:text-fs19 ml-[413px] text-fs18 text-gray_900 text-left underline xl:ml-[516px] xl:text-fs22"
              compId="1930:26537"
              comWidth={128}
              compLeft={413}
              compRight={0}
              compType="Text"
            >{`Slider/Carusel`}</Text>
            <Text
              className="2xl:ml-[49px] 2xl:text-fs25 3xl:ml-[59px] 3xl:text-fs30 font-normal lg:ml-[38px] lg:text-fs19 ml-[35px] text-fs18 text-gray_900 text-left underline xl:ml-[43px] xl:text-fs22"
              compId="1930:26538"
              comWidth={57}
              compLeft={35}
              compRight={0}
              compType="Text"
            >{`Empty`}</Text>
            <Text
              className="2xl:ml-[192px] 2xl:mr-[757px] 2xl:text-fs25 3xl:ml-[231px] 3xl:mr-[908px] 3xl:text-fs30 font-normal lg:ml-[149px] lg:mr-[588px] lg:text-fs19 ml-[137px] mr-[538px] text-fs18 text-gray_900 text-left underline xl:ml-[171px] xl:mr-[673px] xl:text-fs22"
              compId="1930:26545"
              comWidth={92}
              compLeft={137}
              compRight={538}
              compType="Text"
            >{`Comment`}</Text>
          </Row>
          <Row
            className="2xl:mt-[91px] 3xl:mt-[109px] font-poppins justify-start lg:mt-[71px] mt-[65px] self-stretch w-[100%] xl:mt-[81px]"
            compId="24"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[121px] 2xl:text-fs56 3xl:ml-[145px] 3xl:text-fs67 font-bold lg:ml-[94px] lg:text-fs43 ml-[86px] text-fs40 text-gray_900 text-left xl:ml-[107px] xl:text-fs50"
              compId="1930:26539"
              comWidth={229}
              compLeft={86}
              compRight={0}
              compType="Text"
            >{`Navigation`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[137px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[165px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[107px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[98px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[122px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26540"
              comWidth={123}
              compLeft={98}
              compRight={0}
              compType="Text"
            >{`Breadcrumbs`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[56px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[67px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[43px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[40px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[50px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26541"
              comWidth={97}
              compLeft={40}
              compRight={0}
              compType="Text"
            >{`Pagination`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[136px] 2xl:mr-[793px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[163px] 3xl:mr-[952px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[106px] lg:mr-[616px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[97px] mr-[564px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[121px] xl:mr-[705px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26542"
              comWidth={66}
              compLeft={97}
              compRight={564}
              compType="Text"
            >{`Header`}</Text>
          </Row>
          <Row
            className="2xl:mt-[33px] 3xl:mt-[40px] font-poppins items-center justify-center lg:mt-[26px] mt-[24px] self-stretch w-[100%] xl:mt-[30px]"
            compId="18"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal lg:ml-[451px] lg:text-fs19 ml-[413px] text-fs18 text-gray_900 text-left underline xl:ml-[516px] xl:text-fs22"
              compId="1930:26543"
              comWidth={134}
              compLeft={413}
              compRight={0}
              compType="Text"
            >{`Navigation bar`}</Text>
            <Text
              className="2xl:ml-[40px] 2xl:mr-[1079px] 2xl:text-fs25 3xl:ml-[48px] 3xl:mr-[1295px] 3xl:text-fs30 font-normal lg:ml-[31px] lg:mr-[838px] lg:text-fs19 ml-[29px] mr-[767px] text-fs18 text-gray_900 text-left underline xl:ml-[36px] xl:mr-[959px] xl:text-fs22"
              compId="1930:26544"
              comWidth={57}
              compLeft={29}
              compRight={767}
              compType="Text"
            >{`Footer`}</Text>
          </Row>
          <Row
            className="2xl:mt-[91px] 3xl:mt-[109px] font-poppins justify-start lg:mt-[71px] mt-[65px] self-stretch w-[100%] xl:mt-[81px]"
            compId="25"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[121px] 2xl:text-fs56 3xl:ml-[145px] 3xl:text-fs67 font-bold lg:ml-[94px] lg:text-fs43 ml-[86px] text-fs40 text-gray_900 text-left xl:ml-[107px] xl:text-fs50"
              compId="1930:26547"
              comWidth={202}
              compLeft={86}
              compRight={0}
              compType="Text"
            >{`Feedback`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[175px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[211px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[136px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[125px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[156px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26548"
              comWidth={103}
              compLeft={125}
              compRight={0}
              compType="Text"
            >{`Notification`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[84px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[101px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[65px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[60px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[75px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26549"
              comWidth={62}
              compLeft={60}
              compRight={0}
              compType="Text"
            >{`Loader`}</Text>
            <Text
              className="2xl:mb-[11px] 2xl:ml-[185px] 2xl:mr-[807px] 2xl:mt-[26px] 2xl:text-fs25 3xl:mb-[13px] 3xl:ml-[222px] 3xl:mr-[969px] 3xl:mt-[32px] 3xl:text-fs30 font-normal lg:ml-[144px] lg:mr-[627px] lg:mt-[20px] lg:text-fs19 mb-[8px] ml-[132px] mr-[574px] mt-[19px] text-fs18 text-gray_900 text-left underline xl:mb-[10px] xl:ml-[165px] xl:mr-[718px] xl:mt-[23px] xl:text-fs22"
              compId="1930:26550"
              comWidth={56}
              compLeft={132}
              compRight={574}
              compType="Text"
            >{`Modal`}</Text>
          </Row>
          <Row
            className="2xl:mt-[33px] 3xl:mt-[40px] font-poppins items-center justify-center lg:mt-[26px] mt-[24px] self-stretch w-[100%] xl:mt-[30px]"
            compId="21"
            comWidth={1400}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="2xl:ml-[581px] 2xl:text-fs25 3xl:ml-[697px] 3xl:text-fs30 font-normal lg:ml-[451px] lg:text-fs19 ml-[413px] text-fs18 text-gray_900 text-left underline xl:ml-[516px] xl:text-fs22"
              compId="1930:26551"
              comWidth={70}
              compLeft={413}
              compRight={0}
              compType="Text"
            >{`Sidebar`}</Text>
            <Text
              className="2xl:ml-[130px] 2xl:text-fs25 3xl:ml-[157px] 3xl:text-fs30 font-normal lg:ml-[101px] lg:text-fs19 ml-[93px] text-fs18 text-gray_900 text-left underline xl:ml-[116px] xl:text-fs22"
              compId="1930:26552"
              comWidth={103}
              compLeft={93}
              compRight={0}
              compType="Text"
            >{`Error pages`}</Text>
            <Text
              className="2xl:ml-[128px] 2xl:mr-[785px] 2xl:text-fs25 3xl:ml-[153px] 3xl:mr-[942px] 3xl:text-fs30 font-normal lg:ml-[99px] lg:mr-[610px] lg:text-fs19 ml-[91px] mr-[558px] text-fs18 text-gray_900 text-left underline xl:ml-[113px] xl:mr-[698px] xl:text-fs22"
              compId="1930:26553"
              comWidth={72}
              compLeft={91}
              compRight={558}
              compType="Text"
            >{`Cookies`}</Text>
          </Row>
        </Column>
      </Column>
    </Column>
  );
};

export default NavigationPage;
