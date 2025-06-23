import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import beforeManual from './assets/before-manual.jpg';
import afterAI from './assets/after-ai.jpg';
import companyOverviewImage from './assets/company_overview.png';
// import beforeCCTV from './assets/before-cctv.jpg';
// import afterCCTV from './assets/after-cctv.jpg';
// import beforeScheduling from './assets/before-scheduling.jpg';
// import afterScheduling from './assets/after-scheduling.jpg';
import { 
  Menu, 
  X, 
  Video, 
  Shield, 
  Users, 
  TrendingUp, 
  Target, 
  Mail, 
  MapPin,
  ChevronRight,
  Brain,
  Zap,
  Globe,
  Youtube,
  Instagram,
  Twitter,
  ArrowUpCircle,
  Cpu,
  Eye,
  Type,
  PlayCircle,
  XCircle,
  CheckCircle,
  BrainCircuit,
  ScanLine,
  GanttChartSquare,
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="container-custom">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl mb-4 text-[#87CEEB]">{title}</h2>
    {subtitle && <p className="max-w-3xl mx-auto text-lg text-gray-400">{subtitle}</p>}
  </div>
);

const Modal = ({ content, onClose }) => {
  if (!content) return null;

  const { icon: Icon, title, sections } = content;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-dark-card w-full max-w-3xl rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-white transform transition-transform duration-300 animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Icon size={28} className="text-primary-400 mr-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400">{title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>
        
        <div className="mt-8 space-y-6 max-h-[70vh] overflow-y-auto pr-4 -mr-4">
          {sections.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h4 className="text-xl font-bold text-amber-400 mb-3">{section.heading}</h4>
              )}
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeComparison, setActiveComparison] = useState(0);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', title: '회사소개' },
    { id: 'products', title: '제품소개' },
    { id: 'before-after', title: '효과비교' },
    { id: 'technology', title: '핵심기술' },
    { id: 'roadmap', title: '로드맵' },
    { id: 'investment', title: '투자유치' },
  ];

  const comparisonData = [
    {
      tabTitle: 'AI 영상 제작',
      before: {
        title: 'Before: 수동 제작',
        points: [ "수일 이상 소요되는 긴 제작 시간", "높은 외주 제작 비용 발생", "전문 편집 기술 및 장비 필수" ]
      },
      after: {
        title: 'After: OnMinds AI',
        points: [ "단 5분 만에 영상 자동 생성", "90% 이상의 비용 절감 효과", "클릭 몇 번으로 전문가 수준의 결과물" ]
      }
    },
    {
      tabTitle: 'AI CCTV',
      before: {
        title: 'Before: 일반 CCTV',
        points: [ '단순 녹화, 실시간 분석 불가', '육안 확인에 의존하는 비효율적 관제', '잦은 오경보 및 낮은 객체 식별률' ]
      },
      after: {
        title: 'After: OnMinds AI',
        points: [ '실시간 이상행위 자동 감지 및 알림', '99% 이상의 정확도로 차량/사람 식별', '관제 인력 및 운영 비용 대폭 절감' ]
      }
    },
    {
      tabTitle: 'AI 인사관리',
      before: {
        title: 'Before: 수동 스케줄링',
        points: [ '수작업으로 인한 높은 시간 소모', '잦은 실수 및 규정 위반 가능성', '직원 만족도 저하 및 잦은 변경 요청' ]
      },
      after: {
        title: 'After: OnMinds AI',
        points: [ '클릭 몇 번으로 최적의 스케줄 자동 생성', '근로기준법 및 내부 규정 100% 준수', '공정성 확보 및 직원 만족도 극대화' ]
      }
    }
  ];

  const investmentPlan = [
    {
      title: '인력 채용',
      details: 'AI 연구개발 인력, 프론트/백엔드 개발자, UX/UI 디자이너, 마케팅/영업 인력 채용'
    },
    {
      title: '서비스 개발 고도화',
      details: '3대 제품 기능 고도화 (영상 생성 엔진, CCTV AI 객체 인식 정확도 향상, 스케줄링 알고리즘 정교화) + 모바일 앱 개발'
    },
    {
      title: '마케팅 및 고객 확보 활동',
      details: '초기 유저 유입, B2B 고객 파일럿 유치, 검색 광고 및 콘텐츠 마케팅, 산업 전시회 참가'
    },
    {
      title: '인프라/운영비',
      details: '클라우드 서버, 데이터베이스 인프라, AI 모델 학습용 GPU 인프라, 사무 공간 운영비'
    },
    {
      title: '법률 및 인증 비용',
      details: 'AI 기술 특허 출원, 보안·개인정보 인증, SaaS 약관 정비 및 법률 자문'
    }
  ];

  const handleOpenModal = (content) => {
    setModalContent(content);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  const philosophyCards = [
    {
      id: 'mission',
      icon: Target,
      title: '미션 (Mission)',
      description: 'AI 기술로 복잡한 문제를 단순화하고, 비즈니스와 일상의 효율성을 극대화합니다.',
      modalContent: {
        icon: Target,
        title: '온마인즈의 미션',
        sections: [
          {
            heading: '',
            content: '온마인즈의 미션은 인공지능 기술을 통해 복잡한 문제를 단순화하고, 비즈니스 운영의 효율성을 극대화하며, 일상생활의 편의와 안전을 증진하는 것입니다. 우리는 AI가 단순한 기술을 넘어, 사람들의 삶과 비즈니스 방식에 긍정적인 변화를 가져오는 강력한 도구가 될 수 있다고 믿습니다. 이를 위해 사용자가 직관적으로 이해하고 활용할 수 있는 AI 솔루션을 개발하여, 기술의 혜택이 특정 전문가에게만 국한되지 않고 모두에게 고루 돌아갈 수 있도록 노력합니다. 궁극적으로, 우리는 AI가 제공하는 지능적인 자동화와 분석 능력을 통해 기업이 본연의 핵심 역량에 집중하고, 개인이 더욱 가치 있는 활동에 시간을 할애할 수 있도록 돕는 것을 목표로 합니다.'
          }
        ]
      }
    },
    {
      id: 'vision',
      icon: Globe,
      title: '비전 (Vision)',
      description: 'AI 솔루션으로 다양한 산업의 새로운 표준을 제시하는 선도 기업으로 자리매김합니다.',
      modalContent: {
        icon: Globe,
        title: '온마인즈의 비전',
        sections: [
          {
            heading: '',
            content: '온마인즈의 비전은 인공지능 기반의 혁신적인 솔루션을 통해 다양한 산업 분야에서 새로운 표준을 제시하는 선도 기업으로 자리매김하는 것입니다. 우리는 영상 콘텐츠 제작, 보안 시스템, 인력 관리 등 각기 다른 영역에서 AI의 잠재력을 최대한 발휘하여, 기존 시장의 패러다임을 변화시키고 미래 비즈니스 환경을 선도하고자 합니다. 지속적인 연구 개발과 사용자 중심의 서비스 개선을 통해, 온마인즈의 AI 솔루션이 전 세계 기업과 개인의 필수적인 파트너가 되어, 더욱 스마트하고 안전하며 효율적인 사회를 만드는 데 기여할 것입니다. 우리는 기술의 발전이 가져올 긍정적인 미래를 상상하며, 그 미래를 현실로 만드는 데 온마인즈가 핵심적인 역할을 수행할 것임을 확신합니다.'
          }
        ]
      }
    }
  ];

  const techCards = [
    {
      id: 'video',
      icon: Video,
      title: 'AI 비디오 생성',
      description: '스튜디오 촬영, 편집 없이 텍스트 입력만으로 AI 아나운서 영상을 제작합니다.',
      modalContent: {
        icon: Video,
        title: 'AI 비디오 생성 기술',
        sections: [
          { heading: '소개', content: '온마인즈의 AI 비디오 생성 기술은 텍스트만으로 실제와 같은 AI 아나운서 영상을 자동으로 제작하는 혁신적인 솔루션입니다. 스튜디오, 전문 인력, 복잡한 편집 과정 없이 누구나 쉽게 고품질 영상을 만들 수 있습니다.' },
          { heading: '주요 기능', content: '• 텍스트 투 스피치(TTS) 및 영상 자동 생성\n• 다양한 AI 아나운서 모델 선택\n• 다국어 음성 지원\n• 영상 배경 및 로고 커스터마이징' },
          { heading: '핵심 기술', content: '• 딥러닝 기반 목소리 및 영상 합성\n• 자연어 처리(NLP)를 통한 문맥 이해\n• 실시간 렌더링 파이프라인' },
        ]
      }
    },
    {
      id: 'cctv',
      icon: ShieldCheck,
      title: 'AI CCTV',
      description: '실시간 영상 분석으로 이상 행동을 감지하고 즉시 대응하여 안전을 확보합니다.',
      modalContent: {
        icon: ShieldCheck,
        title: 'AI CCTV 기술',
        sections: [
          { heading: '소개', content: 'AI CCTV는 기존의 감시 시스템을 뛰어넘는 지능형 보안 솔루션입니다. 딥러닝 영상 분석 기술을 통해 실시간으로 위험 상황, 침입, 특정 행동 패턴 등을 감지하고 관리자에게 즉시 알려 선제적인 대응을 가능하게 합니다.' },
          { heading: '주요 기능', content: '• 실시간 이상 행동 및 위험 감지 (폭력, 쓰러짐 등)\n• 객체 추적 및 동선 분석\n• 특정 구역 침입 감지\n• 자동 알림 및 리포트 생성' },
          { heading: '핵심 기술', content: '• 고도화된 객체 탐지(Object Detection)\n• 행동 인식(Action Recognition)\n• 엣지 컴퓨팅을 통한 현장 분석' },
        ]
      }
    },
    {
      id: 'hr',
      icon: Users,
      title: 'AI 인사 스케줄링',
      description: '근무 규칙, 직원 선호도를 반영하여 복잡한 스케줄을 자동으로 최적화합니다.',
      modalContent: {
        icon: Users,
        title: 'AI 인사 스케줄링 기술',
        sections: [
          { heading: '소개', content: '복잡하고 시간이 많이 소요되는 직원 스케줄링 업무를 AI가 대신합니다. 다양한 근무 조건, 법적 규제, 직원들의 선호도를 모두 고려하여 가장 공정하고 효율적인 근무표를 자동으로 생성합니다.' },
          { heading: '주요 기능', content: '• 복수 근무 조건 및 규칙 설정\n• 직원 휴가 및 선호 시간 자동 반영\n• 최적화된 스케줄 자동 생성\n• 손쉬운 스케줄 공유 및 수정' },
          { heading: '핵심 기술', content: '• 조합 최적화(Combinatorial Optimization) 알고리즘\n• 제약 조건 만족 문제(CSP) 해결 엔진\n• 머신러닝 기반 수요 예측' },
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-custom-black">
      <Modal content={modalContent} onClose={handleCloseModal} />

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-custom-black shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="OnMinds Logo" className="h-24 mr-4" />
            </div>
            <div className="hidden md:flex items-center">
              <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <button key={link.id} onClick={() => scrollToSection(link.id)} className="transition-colors text-gray-300 hover:text-primary-400">
                    {link.title}
                  </button>
                ))}
              </nav>
              <div className="ml-6">
                <button onClick={() => scrollToSection('contact')} className="bg-primary-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-600 transition-colors">
                  문의하기
                </button>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 transition-colors text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-custom-black border-t-2 border-white">
              <div className="px-4 py-4 space-y-2">
                <div className="mt-4">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <button key={link.id} onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }} className="text-lg transition-colors text-gray-300 hover:text-primary-400">
                        {link.title}
                      </button>
                    ))}
                    <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="bg-primary-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors text-lg">
                      문의하기
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 bg-custom-black">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl leading-tight animate-text-focus-in">
                AI로 세상을 더 <span className="gradient-text">간편하고 똑똑하게</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed animate-fade-in-bottom">
                온마인즈는 영상, 보안, 인사 영역을 혁신하는 AI 솔루션 기업입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => scrollToSection('products')} className="btn-primary inline-flex items-center justify-center">
                  제품 알아보기 <ChevronRight size={20} className="ml-2" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Image */}
      <div className="container-custom my-0">
        <img src={companyOverviewImage} alt="OnMinds Company Vision" className="max-w-3xl mx-auto h-auto rounded-xl shadow-2xl" />
      </div>

      {/* About Section */}
      <Section id="about">
        <SectionTitle title="우리는 누구인가요?" subtitle="온마인즈는 기술을 통해 더 나은 세상을 만듭니다. 우리의 미션과 비전을 확인해보세요." />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {philosophyCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleOpenModal(card.modalContent)}
              className="bg-custom-black p-8 rounded-2xl text-center border-2 border-white cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex-grow">
                <div className="w-20 h-20 bg-custom-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <card.icon size={36} className="text-primary-400" />
                </div>
                <h3 className="text-xl mb-4">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-primary-500 hover:text-primary-400 font-semibold inline-flex items-center">
                  <span>자세히 보기</span>
                  <ChevronRight size={20} className="ml-1" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Products Section */}
      <Section id="products" className="bg-custom-black/50">
        <SectionTitle title="온마인즈의 AI 제품" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Video, title: 'AI 숏폼 자동 제작 웹앱' },
            { icon: Shield, title: 'CCTV AI 보안 시스템' },
            { icon: Users, title: 'AI 인사 스케줄링' }
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="bg-custom-black p-8 rounded-2xl border-2 border-white card-hover flex flex-col items-center justify-center text-center h-52">
              <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon size={32} className="text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Before & After Section */}
      <Section id="before-after">
        <SectionTitle title="Before & After" subtitle="기존 방식과 OnMinds 자동화 결과의 차이를 직접 확인해보세요."/>
        
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {comparisonData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveComparison(index)}
              className={`py-2 px-6 rounded-full transition-all duration-300 text-sm md:text-base transform focus:outline-none ${
                activeComparison === index
                  ? 'bg-primary-500 text-white font-semibold shadow-lg shadow-primary-500/30'
                  : 'bg-custom-black text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.tabTitle}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Before */}
          <div className="space-y-6 border-2 border-white rounded-2xl p-8 h-full flex flex-col">
            <h3 className="text-2xl text-center font-semibold text-red-400">{comparisonData[activeComparison].before.title}</h3>
            <ul className="space-y-4 text-lg flex-grow mt-6">
              {comparisonData[activeComparison].before.points.map(item => (
                <li key={item} className="flex items-center text-gray-400"><XCircle className="text-red-400 mr-3 flex-shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          {/* After */}
          <div className="space-y-6 border-2 border-white rounded-2xl p-8 bg-custom-black shadow-2xl shadow-primary-500/10 h-full flex flex-col">
            <h3 className="text-2xl text-center font-semibold text-primary-400">{comparisonData[activeComparison].after.title}</h3>
            <ul className="space-y-4 text-lg flex-grow mt-6">
              {comparisonData[activeComparison].after.points.map(item => (
                <li key={item} className="flex items-center text-gray-200"><CheckCircle className="text-primary-500 mr-3 flex-shrink-0" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Core Technology Section */}
      <Section id="technology" className="bg-custom-black/50">
        <SectionTitle title="우리의 핵심 기술" subtitle="온마인즈는 독자적으로 개발한 AI 엔진과 최신 기술의 융합을 통해, 각 산업에 최적화된 독보적인 솔루션을 제공합니다."/>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {techCards.map((tech) => (
            <div
              key={tech.id}
              onClick={() => handleOpenModal(tech.modalContent)}
              className="bg-custom-black p-8 rounded-2xl text-center border-2 border-white cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex-grow">
                <div className="w-20 h-20 bg-custom-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <tech.icon size={36} className="text-primary-400" />
                </div>
                <h3 className="text-xl mb-4">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-primary-500 hover:text-primary-400 font-semibold inline-flex items-center">
                  <span>자세히 보기</span>
                  <ChevronRight size={20} className="ml-1" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment Section */}
      <Section id="investment">
        <SectionTitle title="투자 유치 금액 및 사용 계획" />
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-400 mb-12">
            온마인즈는 혁신적인 AI 솔루션의 개발 가속화와 시장 확대를 위해 총 10억 원 규모의 시드 투자를 유치하고자 합니다. 이 자금은 각 사업 분야의 핵심 역량을 강화하고, 견고한 시장 지위를 확보하는 데 전략적으로 활용될 예정입니다. 투자금의 세부 사용 계획은 다음과 같습니다.
          </p>
          <div className="space-y-6">
            {investmentPlan.map((item, index) => (
              <div key={index} className="bg-custom-black border-2 border-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{index + 1}. {item.title}</h3>
                <p className="text-gray-400">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section id="roadmap">
        <SectionTitle title="미래를 향한 발걸음: 온마인즈 로드맵" subtitle="온마인즈는 명확한 목표와 단계별 실행 계획을 통해 AI 기술의 미래를 선도합니다."/>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 h-full w-0.5 bg-white right-[1.15rem] hidden md:block"></div>
            <div className="space-y-12">
              {[
                { year: '2025', title: '제품 고도화 및 레퍼런스 확보', desc: 'AI 기술 고도화와 함께 다양한 산업 분야의 성공 사례를 확보하여 시장 입지를 다집니다.' },
                { year: '2026', title: '국내 시장 확대 및 안정화', desc: '한국 시장에서의 선도적 위치를 확립하고 안정적인 비즈니스 모델을 구축합니다.' },
                { year: '2027', title: '글로벌 진출 및 통합 AI 플랫폼 구축', desc: '해외 시장 진출을 통해 글로벌 AI 솔루션 기업으로 성장하고 통합 플랫폼을 완성합니다.' }
              ].map(({ year, title, desc }) => (
                <div key={year} className="relative flex items-center md:items-start">
                  <div className="md:hidden absolute top-0 left-0 h-full w-0.5 bg-white"></div>
                  <div className="md:hidden w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold ring-4 ring-dark-bg z-10">{year.substring(2)}</div>
                  <div className="flex-grow pl-10 md:pl-0 md:pr-16">
                    <div className="bg-custom-black p-8 rounded-2xl border-2 border-white card-hover">
                      <h3 className="text-xl mb-4">{title}</h3>
                      <p className="text-gray-400">{desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-5 right-0">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/30 ring-4 ring-dark-bg">{year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer id="contact" className="section-padding !pt-20 !pb-12 bg-custom-black border-t-2 border-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <img src={logo} alt="OnMinds Logo" className="h-16" />
              <div>
                <p className="font-bold text-gray-200">주소</p>
                <p>경기도 수원시 팔달구 갓매산로 51, 6층 601호 (우)16455</p>
                <p className="text-gray-500 text-sm mt-1">601, 6F, 51 Gatmaesan-ro, Paldal-gu, Suwon-si, Gyeonggi-do (16455)</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">대표자</p>
                <p>오명훈</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">사업자 등록번호</p>
                <p>792-22-02230</p>
              </div>
              <div>
                <p className="font-bold text-gray-200">비즈니스 문의</p>
                <a href="mailto:onminds123@gmail.com" className="hover:text-primary-400 transition-colors">onminds123@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-between">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              </div>
              <button onClick={() => scrollToSection('hero')} className="mt-8 md:mt-0 text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <span>TOP</span><ArrowUpCircle size={32} />
              </button>
            </div>
          </div>
          <div className="border-t-2 border-white mt-12 pt-8 text-center md:text-left">
            <p className="text-sm text-gray-500">
              © 2025 OnMinds Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 