import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressRing from '../components/ui/ProgressRing';
import CadenceInsightCard from '../components/ui/CadenceInsightCard';
import { mockRider, mockGoal, mockRides, mockWeek, cadenceInsights } from '../data/mock';

export default function HomePage() {
  const navigate = useNavigate();
  const activeMilestone = mockGoal.milestones.find(m => m.state === 'working') || mockGoal.milestones[0];
  const progress = activeMilestone.ridesConsistent / activeMilestone.ridesRequired;
  const recentRide = mockRides[0];
  const ridesThisWeek = mockWeek.filter(d => d.ridden).length;

  const getDayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };
  const getDate = () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div style={{ background: '#FAF7F3', minHeight: '100%' }}>

      {/* ─── Hero section ─── */}
      <div
        style={{
          padding: '14px 24px 20px',
          background: 'linear-gradient(180deg, rgba(140,90,60,0.05) 0%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Greeting strip */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '22px' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#1A140E' }}>
            Good morning, <em style={{ fontStyle: 'italic', color: '#8C5A3C' }}>{mockRider.firstName}.</em>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#B5A898', letterSpacing: '0.04em' }}>
            {getDate()}
          </div>
        </div>

        {/* Context hint */}
        {mockRider.upcomingCompetition && (
          <div style={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#C2896A', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#7A6B5D', fontFamily: "'DM Sans', sans-serif" }}>
              Lesson with {mockRider.horse} this afternoon
            </span>
          </div>
        )}

        {/* Progress Ring */}
        <ProgressRing
          progress={progress}
          label={activeMilestone.name}
          sublabel={`${activeMilestone.ridesConsistent}/${activeMilestone.ridesRequired}`}
          sublabelCaption="rides"
          size={190}
        />

        {/* Below ring meta */}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10.5px', color: '#B5A898', letterSpacing: '0.04em' }}>
            {mockGoal.level} · {mockGoal.test}
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#F8F3EC', borderRadius: '20px', padding: '5px 12px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A96E' }} />
            <span style={{ fontSize: '11px', color: '#7A6B5D', fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
              Working on it
            </span>
          </div>
        </div>
      </div>

      {/* ─── Cards ─── */}
      <div style={{ padding: '0 20px 28px' }}>

        {/* Today's Cue */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '18px',
          padding: '17px 18px',
          marginBottom: '10px',
          borderLeft: '4px solid #8C5A3C',
          boxShadow: '0 2px 14px rgba(26,20,14,0.06)',
        }}>
          <div style={{
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#8C5A3C', marginBottom: '8px',
            display: 'flex', alignItems: 'center', gap: 5,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#8C5A3C' }} />
            Today's Ride Cue
          </div>
          <p style={{
            fontSize: '14px', color: '#1A140E', lineHeight: 1.5,
            marginBottom: '14px', fontFamily: "'DM Sans', sans-serif",
          }}>
            Let weight <strong>drop through your heel</strong> in 20m trot circles. Soften the ankle — don't grip with the knee.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => navigate('/journey')}
              style={{
                flex: 1, background: '#8C5A3C', color: '#FAF7F3',
                border: 'none', borderRadius: '10px', padding: '10px 12px',
                fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              View Exercises
            </button>
            <button
              onClick={() => navigate('/rides')}
              style={{
                background: 'transparent', color: '#8C5A3C',
                border: '1.5px solid #D4B99A', borderRadius: '10px',
                padding: '10px 14px', fontSize: '13px', fontWeight: 500,
                cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Log Ride
            </button>
          </div>
        </div>

        {/* Cadence insight */}
        <div style={{ marginBottom: '10px' }}>
          <CadenceInsightCard text={cadenceInsights.home} />
        </div>

        {/* Recent activity */}
        <div style={{
          fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#B5A898', marginBottom: '8px',
          marginTop: '16px', fontFamily: "'DM Sans', sans-serif",
        }}>
          Recent Activity
        </div>
        <div
          onClick={() => navigate(`/rides/${recentRide.id}`)}
          style={{
            background: '#FFFFFF', borderRadius: '14px', padding: '13px 15px',
            display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 2px 10px rgba(26,20,14,0.05)', cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#7D9B76', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13.5px', fontWeight: 500, color: '#1A140E', fontFamily: "'DM Sans', sans-serif", marginBottom: 2 }}>
              Training Ride · {recentRide.horse}
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10.5px', color: '#B5A898' }}>
              Yesterday · {recentRide.duration} min · {recentRide.focusMilestone}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '18px', color: '#7D9B76', lineHeight: 1 }}>↑</div>
            <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B5A898', fontFamily: "'DM Sans', sans-serif" }}>Improving</div>
          </div>
        </div>

        {/* This week */}
        <div style={{
          fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#B5A898', marginBottom: '8px',
          marginTop: '8px', fontFamily: "'DM Sans', sans-serif",
        }}>
          This Week
        </div>
        <div style={{
          background: '#FFFFFF', borderRadius: '14px', padding: '14px 15px',
          boxShadow: '0 2px 10px rgba(26,20,14,0.05)', marginBottom: '10px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, color: '#1A140E', fontFamily: "'DM Sans', sans-serif" }}>Ride frequency</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#8C5A3C', fontWeight: 500 }}>{ridesThisWeek} rides</span>
          </div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: '44px' }}>
            {mockWeek.map((day, i) => {
              const maxH = 38;
              const h = day.ridden ? Math.max(14, (day.duration || 40) / 60 * maxH) : 8;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{
                    width: '100%', height: `${h}px`, borderRadius: '4px 4px 3px 3px',
                    background: day.isToday ? 'transparent' : day.ridden ? '#8C5A3C' : '#F0EBE4',
                    border: day.isToday ? '1.5px dashed #C9A96E' : 'none',
                    transition: 'height 0.3s ease',
                  }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: day.isToday ? '#C9A96E' : '#B5A898' }}>
                    {day.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming */}
        {mockRider.upcomingCompetition && (
          <>
            <div style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#B5A898', marginBottom: '8px',
              marginTop: '8px', fontFamily: "'DM Sans', sans-serif",
            }}>
              Upcoming
            </div>
            <div style={{
              background: '#FFFFFF', borderRadius: '14px', padding: '12px 15px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 2px 10px rgba(26,20,14,0.05)',
            }}>
              <div style={{
                width: 32, height: 32, background: '#F8F3EC', borderRadius: '9px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', flexShrink: 0,
              }}>🏆</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#1A140E', fontFamily: "'DM Sans', sans-serif" }}>
                  {mockRider.upcomingCompetition.name}
                </div>
                <div style={{ fontSize: '11px', color: '#B5A898', fontFamily: "'DM Sans', sans-serif" }}>
                  {mockRider.upcomingCompetition.level} · {mockRider.upcomingCompetition.tests.join(' & ')}
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#8C5A3C', fontWeight: 500 }}>
                {mockRider.upcomingCompetition.daysAway} days
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
