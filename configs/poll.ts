import ddpAvatar from '@/assets/images/avatar/ddp-avatar.png';
import kmtAvatar from '@/assets/images/avatar/kmt-avatar.png';
import pfpAvatar from '@/assets/images/avatar/pfp-avatar.png';

export const POLL_MAP = {
  '11/13-15': [
    { name: '蔡英文', value: 45, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 37, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 8, fill: '#F88545', image: pfpAvatar.src },
  ],
  '11/27-29': [
    { name: '蔡英文', value: 46, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 31, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 8, fill: '#F88545', image: pfpAvatar.src },
  ],
  '12/02-04': [
    { name: '蔡英文', value: 51, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 29, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 7, fill: '#F88545', image: pfpAvatar.src },
  ],
  '12/12-14': [
    { name: '蔡英文', value: 50, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 31, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 6, fill: '#F88545', image: pfpAvatar.src },
  ],
  '12/29': [
    { name: '蔡英文', value: 45, fill: '#25A55C', image: ddpAvatar.src },
    { name: '韓國瑜', value: 29, fill: '#4A8FE7', image: kmtAvatar.src },
    { name: '宋楚瑜', value: 7, fill: '#F88545', image: pfpAvatar.src },
  ],
};

export const POLLS_DATE = ['11/13-15', '11/27-29', '12/02-04', '12/12-14', '12/29'] as const;
