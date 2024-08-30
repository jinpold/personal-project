# [ GGUN 프로젝트 - 1차 개인 스프린트]

- 이 프로젝트는 주식 웹 개발을 목표로 한 프론트엔드와 백엔드 통합 시스템입니다.
- 사용자는 회원가입, 로그인, 마이페이지 관리, 뉴스 확인, 게시판 작성 등의 기능을 활용할 수 있습니다.

# [프로젝트 개요]

- 본 프로젝트는 Next.js 14와 React 18을 기반으로 한 프론트엔드와 Spring MVC 패턴 및 JPA를 활용한 백엔드로 구성되어 있습니다. 데이터베이스는 Docker를 사용해 MySQL을 컨테이너화하고, nCloud에 저장하여 관리하고 있습니다. 각 페이지와 API는 비동기 처리와 Axios 라이브러리를 통해 통신하며, 상태 관리는 Redux와 React-Hook-Form을 사용하여 효율적으로 구현되었습니다.

# [기술 스택]

 [FrontEnd]
 
- 프레임워크: Next.js 14, React 18
- 상태 관리: Redux, React-Hook-Form
- 비동기 처리: Async, Axios
- 디자인 패턴: 아토믹 패턴


 [BackEnd]
  
- 프레임워크: Spring MVC
- ORM: JPA (Query Method 및 JPQL)
- 크롤링: JSOUP
- 보안: JWT AccessToken

 [DataBase]

- DBMS: MySQL
- 환경: Docker, nCloud

[주요 기능]

- 홈페이지 (메인 페이지)
프로젝트의 메인 페이지로, 현재는 페이지 간 이동만 가능합니다. 추후 팀 메인 페이지로 변경할 예정입니다.

- 회원가입 페이지
회원이 입력한 데이터는 Redux에 저장되며, Axios를 통해 API로 MySQL DB에 저장됩니다.
백엔드에서는 주민등록번호를 통한 성별 분석, MBTI를 통한 성향 파악 등의 로직이 추가되어 있습니다.

- 로그인 페이지
아이디와 패스워드가 DB 정보와 일치할 경우 JWT AccessToken이 발급되며, 로그아웃 시 해당 토큰이 제거됩니다.

- 마이 페이지
로그인한 회원은 마이페이지에서 자신의 정보를 수정하거나 삭제할 수 있습니다. 수정 및 삭제는 Axios를 통해 API로 DB에서 처리됩니다.

- NEWS 페이지
JSOUP을 활용한 웹 크롤링을 통해 실시간 뉴스를 제공하며, 프론트엔드는 Axios를 사용해 데이터를 받아옵니다.

- 게시판 페이지
게시판 정보는 테이블 형식으로 제공되며, CRUD 기능이 구현되어 있습니다. 현재는 더미데이터를 사용하고 있으며, 글쓰기, 수정, 삭제 기능을 제공합니다.

[아쉬운 점 및 개선 사항]

- QueryDSL 미사용
   검색 기능의 최적화를 위해 QueryDSL을 사용하지 못한 점이 아쉽습니다. 추후 성능 개선을 위해 QueryDSL을 도입할 계획입니다.

- RefreshToken 미사용
   로그인 보안 강화를 위해 RefreshToken을 사용하지 못했습니다. 추후 RefreshToken을 활용해 보안 기능을 강화하고, 각 기능에 최적화된 로직으로 리팩토링할 예정입니다.


  
