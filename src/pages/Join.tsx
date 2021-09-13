import Button from '../component/Button';
import Input from '../component/Input';
import { Title } from '../Styled';

function Join() {
  return (
    <div className="Join">
      <Title>회원가입</Title>
      <div className="Join-body">
        <Input id={'email'} type={'email'} labelTxt={'이메일'} index={1} placeholder={'abc@uphone.co.kr'} />
        <Input id={'password'} type={'password'} labelTxt={'비밀번호'} index={1} placeholder={'8~16자 영문, 숫자, 특수문자 사용'} />
        <Input id={'passwordChk'} type={'empasswordail'} labelTxt={'비밀번호 재확인'} index={1} placeholder={'입력한 비밀번호와 동일'} />
        <Input id={'userName'} type={'text'} labelTxt={'이름'} index={1} placeholder={'김유폰'} />
        <Input id={'phoneNumber'} type={'text'} labelTxt={'휴대전화번호'} index={1} placeholder={'01012345678'} />
        <Input id={'allCheck'} type={'checkbox'} labelTxt={'전체 약관 동의'} index={1} />
        <Input id={'ageCheck'} type={'checkbox'} labelTxt={'만 14세 이상입니다.'} index={1} />
        <Input id={'termsCheck'} type={'checkbox'} labelTxt={'이용약관 동의'} index={1} />
        <Input id={'privacyCheck'} type={'checkbox'} labelTxt={'개인정보 수집 및 이용 동의'} index={1} />
        <Input id={'test'} type={'checkbox'} labelTxt={'테스트'} index={1} />
        <Button id={'apply'} buttonTxt={'회원가입 완료'} />
      </div>
    </div>
  );
}

export default Join;
