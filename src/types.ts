export interface Tender {
  id: string;
  title: string;
  agency: string;
  budget: number;
  deadline: string;
  matchScore: number;
  status: 'recommended' | 'pending' | 'rejected' | 'completed';
  location: string;
  description?: string;
}

export const mockTenders: Tender[] = [
  {
    id: '01',
    title: '2024年政务云系统采购项目',
    agency: '某市大数据管理局',
    budget: 12500000,
    deadline: '2024-11-25',
    matchScore: 92,
    status: 'recommended',
    location: '浙江省',
    description: '本项目要求提供具备云原生架构的高可用存储解决方案，需支持PB级数据处理与秒级弹性伸缩。'
  },
  {
    id: '02',
    title: '智慧园区安防监控二次扩容',
    agency: '华东产业园区管委会',
    budget: 3800000,
    deadline: '2024-11-20',
    matchScore: 85,
    status: 'pending',
    location: '北京市'
  },
  {
    id: '03',
    title: '医疗信息化管理平台集成服务',
    agency: '省人民医院总务处',
    budget: 8200000,
    deadline: '2024-11-28',
    matchScore: 78,
    status: 'recommended',
    location: '上海市'
  },
  {
    id: '04',
    title: '教育系统数字化办公套件采购',
    agency: '市教育体育局',
    budget: 1200000,
    deadline: '2024-12-05',
    matchScore: 45,
    status: 'rejected',
    location: '江苏省'
  }
];
