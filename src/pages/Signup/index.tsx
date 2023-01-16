import Input from "@components/Input";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <h2>회원가입</h2>
      <InputWrapper>
        <Input id="email" type="email" label="이메일" />
        <Input id="name" type="text" label="이름" />
        <Input id="pwd" type="password" label="비밀번호" />
        <Input id="pwdcfm" type="password" label="비밀번호 확인" />
      </InputWrapper>
      <CheckContainer>
        <CheckWrapper>
          <div>
            <input type="checkbox" id="all_check_agree" />
            모두 동의합니다.
          </div>
          <div>
            <input type="checkbox" id="all_check_agree" />
            (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.
          </div>
          <div>
            <input type="checkbox" id="all_check_agree" />
            (필수) 만 14세 이상입니다.
          </div>
          <div>
            <input type="checkbox" id="all_check_agree" />
            (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
          </div>
        </CheckWrapper>
      </CheckContainer>
      <BtnContainer>
        <Button type="submit">가입하기</Button>
      </BtnContainer>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  padding: 1.875rem 1rem;
  max-width: 400px;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
  }
`;

const InputWrapper = styled.div`
  label {
    line-height: 2.5rem;
  }
  input {
    display: block;
    border: 1px solid var(--primary-color);
    width: 100%;
    line-height: 10px;
    padding: 0.625rem 0.9375rem;
    color: var(--primary-color);
  }
`;

const CheckContainer = styled.div`
  margin-top: 1.25rem;
`;

const CheckWrapper = styled.div``;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 2.5rem auto 0;
`;

const Button = styled.button`
  margin-bottom: 0.625rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white);
`;
