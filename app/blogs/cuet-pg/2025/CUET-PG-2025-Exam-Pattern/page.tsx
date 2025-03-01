import React from 'react';
import { Metadata } from "next";
import { Category } from "@/types/category";
import allCategory from "@/data/category/data.json";
import Link from 'next/link';
import { Blog } from '@/types/blog';

export const metadata: Metadata = {
  title: "CUET PG 2025 Exam Pattern",
  description: "Prepare for CUET UG 2025 with a subject-wise study plan, expert tips, and effective strategies. Learn time management techniques, best books, and practice methods to ace the exam with confidence!",
};

const CUET_PG_2025_Exam_Pattern: React.FC = () => {
  const category = "cuet-pg";
  const currentCategory: Category | undefined = allCategory.find((item: Category) => item.key === category);

  return (
    <div className='blog-wrapper'>
      <div className='blog-body'>
        <h1 className="blog-title">Complete Guide to CUET PG 2025 Exam Pattern for Aspiring Students</h1>

        <p>The <strong>CUET PG</strong> 2025 exam is an essential stepping stone for students aspiring to pursue postgraduate education in India. As the examination approaches, understanding its pattern becomes critical for effective preparation. This blog post will delve deep into the exam structure, marking scheme, and other vital information you need to strategize your study plan.</p>

        <h2 className="sub-headings">What is CUET PG?</h2>
        <p>The <strong>CUET PG</strong> (Common University Entrance Test for Postgraduate courses) is a national-level entrance exam conducted for admissions to various postgraduate programs in universities across India. The exam is designed to assess the knowledge and aptitude of students in their respective fields. As it gains popularity, knowing its exam pattern and structure becomes increasingly important for every student preparing to take the test.</p>

        <h2 className="sub-headings">Exam Structure of CUET PG 2025</h2>
        <p>The <strong>CUET PG</strong> exam will consist of objective-type questions, primarily focusing on subjects related to the specific postgraduate course. The exam pattern has been designed to assess both theoretical knowledge and practical skills. It is crucial for students to be well-versed in both the marking scheme and types of questions asked to improve their chances of success.</p>

        <h3 className="h3-heading">Detailed Exam Pattern</h3>
        <table>
          <thead>
            <tr>
              <th>Section</th>
              <th>Number of Questions</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Awareness</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Subject-Specific Questions</td>
              <td>100</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>150</td>
              <td>150</td>
            </tr>
          </tbody>
        </table>

        <p>Students can see that the exam consists of both general awareness and subject-specific questions. It's essential to strategize your revision and practice sessions based on this structure. The exam duration will likely be 2 hours, and managing time effectively is crucial during your preparations.</p>

        <h2 className="sub-headings">Marking Scheme</h2>
        <p>The marking scheme for the <strong>CUET PG</strong> is straightforward. Each correct answer usually awards one mark, while incorrect answers may incur negative marking—typically 0.25 marks. Therefore, it's advisable to focus on accuracy rather than attempting guesses, as this can significantly impact your overall score.</p>

        <h2 className="sub-headings">Preparation Strategies for CUET PG</h2>
        <p>Effective preparation strategies are key when gearing up for the <strong>CUET PG</strong> exam. It is suggested to create a well-structured study schedule that allows ample time for each subject. Incorporate both theoretical concepts and practical exercises into your routine. Practice previous years' question papers to familiarize yourself with the exam pattern and manage your time accordingly.</p>

        <h2 className="sub-headings">Conclusion: Your Pathway to Success in CUET PG 2025</h2>
        <p>In conclusion, the <strong>CUET PG</strong> exam is designed with a clear structure focused on assessing the specific knowledge needed for postgraduate studies. By understanding the exam pattern, marking scheme, and essential preparation strategies discussed in this blog, aspiring students can significantly enhance their chances of success. It’s time to take action, plan your studies, and embark on your journey toward a brighter academic future!</p>
      </div>

      <div className='blog-sidebar'>
        <h2>Related Blogs</h2>
        <div className="category-cards-holder">
          {
            currentCategory && currentCategory.blogs.map((b: Blog, i: number) => (
              <div key={i} className="category-card">
                <div>
                  <h3>{b.title}</h3>
                </div>
                <Link href={b.url}>
                  <button className="read-more-btn">Read More</button>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CUET_PG_2025_Exam_Pattern;