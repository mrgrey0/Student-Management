import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  courseList:any[]=[
    {
    id: 'C101',
    title: 'Angular Essentials',
    category: 'Web Development',
    duration: '4 weeks',
    level: 'Intermediate',
    status: 'Active'
  },
  {
    id: 'C102',
    title: 'Introduction to Python',
    category: 'Programming',
    duration: '6 weeks',
    level: 'Beginner',
    status: 'Active'
  },
  {
    id: 'C103',
    title: 'Mastering ReactJS',
    category: 'Web Development',
    duration: '5 weeks',
    level: 'Advanced',
    status: 'Inactive'
  },
  {
    id: 'C104',
    title: 'UI/UX Design Fundamentals',
    category: 'Design',
    duration: '3 weeks',
    level: 'Beginner',
    status: 'Active'
  },
  {
    id: 'C105',
    title: 'Java Spring Boot Crash Course',
    category: 'Backend Development',
    duration: '6 weeks',
    level: 'Intermediate',
    status: 'Active'
  },
  {
    id: 'C106',
    title: 'Machine Learning with Python',
    category: 'Data Science',
    duration: '8 weeks',
    level: 'Advanced',
    status: 'Active'
  },
  {
    id: 'C107',
    title: 'Digital Marketing 101',
    category: 'Marketing',
    duration: '4 weeks',
    level: 'Beginner',
    status: 'Inactive'
  },
  {
    id: 'C108',
    title: 'Git & GitHub for Beginners',
    category: 'Tools',
    duration: '2 weeks',
    level: 'Beginner',
    status: 'Active'
  },
  {
    id: 'C109',
    title: 'Full Stack Web Development Bootcamp',
    category: 'Full Stack',
    duration: '10 weeks',
    level: 'Advanced',
    status: 'Active'
  },
  {
    id: 'C110',
    title: 'Data Structures & Algorithms in Java',
    category: 'Programming',
    duration: '7 weeks',
    level: 'Intermediate',
    status: 'Active'
  },
  {
    id: 'C111',
    title: 'Cloud Computing with AWS',
    category: 'Cloud',
    duration: '6 weeks',
    level: 'Intermediate',
    status: 'Active'
  },
  {
    id: 'C112',
    title: 'DevOps with Docker & Kubernetes',
    category: 'DevOps',
    duration: '5 weeks',
    level: 'Advanced',
    status: 'Active'
  },
  {
    id: 'C113',
    title: 'Blockchain Basics',
    category: 'Emerging Tech',
    duration: '4 weeks',
    level: 'Beginner',
    status: 'Inactive'
  },
  {
    id: 'C114',
    title: 'Cybersecurity Fundamentals',
    category: 'Security',
    duration: '6 weeks',
    level: 'Intermediate',
    status: 'Active'
  },
  {
    id: 'C115',
    title: 'Mobile App Development with Flutter',
    category: 'Mobile Development',
    duration: '5 weeks',
    level: 'Intermediate',
    status: 'Active'
  }
  ]
}
