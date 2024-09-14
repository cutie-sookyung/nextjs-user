# 유저 관리 시스템

이 프로젝트는 Next.js를 사용하여 구현한 간단한 유저 관리 시스템입니다. 사용자를 추가하고, 조회하고, 삭제할 수 있는 기능을 제공합니다.

## 기능

- 유저 목록 조회
- 새 유저 추가
- 유저 삭제

## 기술 스택

- Next.js
- React
- TypeScript
- Prisma (ORM)
- SQLite (데이터베이스)

## 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- npm (v6 이상)

### 설치

1. 레포지토리를 클론합니다:

   ```
   git clone https://github.com/yourusername/user-management-system.git
   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```
   cd user-management-system
   ```

3. 필요한 패키지를 설치합니다:

   ```
   npm install
   ```

4. Prisma 클라이언트를 생성합니다:

   ```
   npx prisma generate
   ```

5. 데이터베이스를 초기화합니다:
   ```
   npx prisma db push
   ```

### 실행

개발 서버를 시작합니다:

```
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션을 확인할 수 있습니다.

## 프로젝트 구조

- `app/`: Next.js 13의 App Router를 사용한 페이지 구성
- `components/`: React 컴포넌트 파일들
- `actions/`: 서버 액션 함수들
- `prisma/`: Prisma 스키마 및 설정
- `public/`: 정적 파일들

## 기여하기

프로젝트 개선을 위한 제안이나 버그 리포트는 언제나 환영합니다. 이슈를 열거나 풀 리퀘스트를 보내주세요.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.
