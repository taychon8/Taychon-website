"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ShoppingBag, Layout, Search, Users, Globe, Code, Database, Shield, Zap, Award, Target, Sparkles } from 'lucide-react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Lines from '@/components/common/Lines';
import Cursor from '@/components/common/cusor';
import { getCaseStudyById } from '@/data/portfolio';

const iconMap = {
  ShoppingBag,
  Layout,
  Search,
  Users,
  Globe,
  Code,
  Database,
  Shield,
  Zap,
  Award,
  Target,
  Sparkles
};

const CaseStudy = () => {
  const params = useParams();
  const caseStudy = getCaseStudyById(params.id);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <>

      <Navbar />
      <Cursor />
      <Lines />

      <main className="geadient-bg text-white">
        {/* Hero Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6">
                <span className="badge bg-primary mb-3">Case Study</span>
                <h1 className="display-3 fw-bold mb-4">{caseStudy.title}</h1>
                <p className="lead mb-5 opacity-75">{caseStudy.subtitle}</p>
                <p className="fs-5 opacity-75">{caseStudy.overview}</p>
              </div>
              <div className="col-lg-6">
                <div className="screenshot-container">
                  <Image
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    width={800}
                    height={600}
                    className="img-fluid"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="glass-card h-100">
                  <h3 className="mb-4">
                    <Target className="me-2 text-primary" size={24} />
                    The Challenge
                  </h3>
                  <p className="opacity-75">{caseStudy.challenge}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="glass-card h-100">
                  <h3 className="mb-4">
                    <Sparkles className="me-2 text-primary" size={24} />
                    The Solution
                  </h3>
                  <p className="opacity-75">{caseStudy.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-5" style={{ marginBottom: '5rem' }}>
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '48px' }}>Key Results</h2>
            <div className="row g-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="col-md-3">
                  <div className="metric-card">
                    <h3 className="display-4 fw-bold text-primary mb-2">{result.metric}</h3>
                    <p className="mb-0 opacity-75">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '48px' }}>Key Features</h2>
            <div className="row g-4">
              {caseStudy.features.map((feature, index) => (
                <div key={index} className="col-lg-3">
                  <div className="glass-card text-center">
                    <div className="text-primary mb-3">
                      {renderIcon(feature.icon)}
                    </div>
                    <h4 className="mb-3">{feature.title}</h4>
                    <p className="opacity-75 mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '48px' }}>Technology Stack</h2>
            <div className="row g-4">
              {caseStudy.techStack.map((tech, index) => (
                <div key={index} className="col-md-3">
                  <div className="glass-card text-center">
                    <div className="text-primary mb-3">
                      {renderIcon(tech.icon)}
                    </div>
                    <h5 className="mb-2">{tech.name}</h5>
                    <p className="opacity-75 small mb-0">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: '48px' }}>Project Gallery</h2>
            <div className="row g-4">
              {caseStudy.screenshots.map((screenshot, index) => (
                <div key={index} className="col-lg-4">
                  <div className="screenshot-container">
                    <Image
                      src={screenshot.url}
                      alt={screenshot.caption}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                    <p className="text-center mt-3 opacity-75">{screenshot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-5">
          <div className="container">
            <div className="testimonial-card">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <p className="lead mb-4 text-center">{caseStudy.testimonial.quote}</p>
                  <div className="text-center author-info">
                    <p className="mb-1 fw-bold text-primary">{caseStudy.testimonial.author}</p>
                    <p className="opacity-75 small">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5">
          <div className="container text-center">
            <h2 className="mb-4">Ready to transform your business?</h2>
            <p className="lead mb-5 opacity-75">Let's create something amazing together</p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Start Your Project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CaseStudy;