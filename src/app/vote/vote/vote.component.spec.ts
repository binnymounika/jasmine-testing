import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import {DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser'

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement.query(By.css('h1'))
    htmlElement=debugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display initial number of votes', () => {
    const initialVotes=component.totalVotes
    expect(htmlElement.textContent).toEqual('Votes:0')
  });

  it('increment number of votes', () => {
    const initialVotes=component.totalVotes
    component.upVote()
    fixture.detectChanges();
    const newVotes=component.totalVotes
    expect(newVotes).toBeGreaterThan(initialVotes)
  });
  it('decrement number of votes', () => {
    const initialVotes=component.totalVotes
    component.downVote()
    fixture.detectChanges();
    const newVotes=component.totalVotes
    expect(newVotes).toBeLessThan(initialVotes)
  });


  it('should display the upVoted number(currentVote=0) ,after being upvoted ', () => {

  component.upVote()
  fixture.detectChanges();
  expect(htmlElement.textContent).toBe('Votes:1')
  })

  it('should display the udownVoted number(currentVote=0) ,after being downvoted ', () => {

    component.downVote()
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:-1')
    })
});
