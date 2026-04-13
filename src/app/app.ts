import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly profile = {
    name: 'Nguyễn Văn Dĩ Khang',
    role: 'Frontend Developer',
    bio: 'Xây dựng giao diện hiện đại, gọn gàng và có thể mở rộng cho các ứng dụng Angular.',
    location: 'Ho Chi Minh City, Vietnam',
    email: 'nguyenvandikhang@example.com'
  } as const;

  protected readonly stats = [
    { value: '2+ năm', label: 'Kinh nghiệm' },
    { value: '12', label: 'Dự án' },
    { value: 'UI / UX', label: 'Thế mạnh' }
  ] as const;

  protected readonly skills = [
    'Angular 21, TypeScript, Signals',
    'HTML, SCSS, Responsive Design',
    'Animation nhẹ, tối ưu trải nghiệm người dùng'
  ] as const;

  protected readonly timeline = [
    { year: '2026', text: 'Tập trung xây dựng trang profile và hệ thống giao diện động.' },
    { year: '2025', text: 'Làm việc với các dự án dashboard, landing page và component library.' },
    { year: '2024', text: 'Tối ưu hiệu năng, accessibility và chuyển sang kiến trúc standalone.' }
  ] as const;
}
