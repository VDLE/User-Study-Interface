import { Component, Input, Output, EventEmitter, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ControlContainer, NgModelGroup, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-experiment-test',
  templateUrl: './experiment-test.component.html',
  styleUrls: ['./experiment-test.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class ExperimentTestComponent{

  @Input() modelGroupName: string;
  @Input() ActualFormGroup: NgModelGroup;
  @Input("Experiment") Experiment: string;
  @Input("FirstPair") FirstPair: string;
  CurrentPair: string;
  CurrentPairStatus: boolean = false;


  // Need to fix the damn toggles
  
  // Progress Bar settings
  current: number = 0;
  max: number = 30;
  stroke: number = 15;
  radius: number = 125;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#673ab7';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: Array<string> = [
    'linearEase',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce',
  ];
  gradient: boolean = false;
  realCurrent: number = 0;

  increment(amount = 1) {
    this.current += amount;
  }

  Questions = [
    {
      number: 1,
      content: [
        {
          name: 'Option A',
          src: '/assets/video1.mp4',
          type: 'video/mp4',
          value: 'A'
        },
        {
          name: 'Option B',
          src: '/assets/video2.mp4',
          type: 'video/mp4',
          value: 'B'
        }]
    },
    {
      number: 2,
      content: [
        {
          name: 'Option A',
          src: '/assets/video3.mp4',
          type: 'video/mp4',
          value: 'A'
        },
        {
          name: 'Option B',
          src: '/assets/video4.mp4',
          type: 'video/mp4',
          value: 'B'
        }]
    }   
  ];

  
  Payload = [
    {
      src: '/assets/Audio/file1.wav' 
    }, 
    {
      src: '/assets/Audio/file2.wav' 
    },    
    {
      src: '/assets/Audio/file3.wav' 
    },   
    // {
    //   src: '/assets/Color-Label/1b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/1g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/1r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/1w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/1y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/2b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/2g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/2r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/2w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/2y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/3b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/3g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/3r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/3w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/3y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/4b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/4g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/4r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/4w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/4y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/5b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/5g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/5r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/5w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/5y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/6b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/6g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/6r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/6w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/6y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/7b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/7g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/7r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/7w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/7y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/8b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/8g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/8r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/8w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/8y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/9b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/9g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/9r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/9w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/9y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/10b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/10g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/10r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/10w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/10y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/11b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/11g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/11r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/11w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/11y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/12b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/12g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/12r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/12w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/12y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/13b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/13g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/13r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/13w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/13y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/14b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/14g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/14r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/14w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/14y.png'  
    // },
    // {
    //   src: '/assets/Color-Label/15b.png' 
    // },
    // {
    //   src: '/assets/Color-Label/15g.png' 
    // },
    // {
    //   src: '/assets/Color-Label/15r.png'  
    // },
    // {
    //   src: '/assets/Color-Label/15w.png' 
    // },
    // {
    //   src: '/assets/Color-Label/15y.png'  
    // }
  ]

  LoadingImage = "/assets/Static/listen.png"

  NextSwitch: boolean = false;

  questionIndex = 0;
  activeIndex = 0;
  currentVideo = this.Questions[this.questionIndex].content[this.activeIndex];
  data: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    //Example of a Call
    // this.http.get<any>('https://api.github.com/users/VDLE/repos').subscribe(data => {
    //   console.log(data);
    // }) 
    
   }
  videoPlayerInit(data: any) {
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    // this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.Questions[this.questionIndex].content.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.Questions[this.questionIndex].content[this.activeIndex];
  }
  initVdo() {
    // this.data.play();

  }
  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

  print(item:number){
    console.log(item);
  }

  ngAfterViewInit() {
    var DeepFakeData = [];
    var MashUpData = [];
    var EmotionalColorData = [];
    
  }

  @ViewChild('InnerStepper') private Stepper: MatStepper;
 

  timeLeft: number = 30;
  interval: any;

  // checkRadioValid(){
  //   if(this.RadioGroup._checkSelectedRadioButton == undefined) return false;
  //   else return true;
  // }

  startTimer(mode: number = 1, timeSet: number = 30) {
    this.timeLeft = timeSet;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.increment();
      } else if(this.timeLeft == 30) {
        this.current = 0;
      }
      else{
        if(mode == 1){
          this.questionIndex++;
          this.activeIndex = 0;
          this.currentVideo = this.Questions[this.questionIndex].content[this.activeIndex];
        }
        else{

        }
        this.timeLeft = timeSet;
        this.current = 0;
        clearInterval(this.interval);
        this.Stepper.next();
      }
    },1000)
  }

  InnerStepperNext(index: number, max: number){
    setTimeout(() => 
    {
      // End Current Task

      // Start Task for Recording
      if(index != max){

      }

      // Shift Stepper
      this.Stepper.next();
    },
    10000);
  }


  
  playMusic(source: string, index: number, max: number){
    var AudioPlay = new Audio();
    AudioPlay.src = source;
    AudioPlay.load();
    AudioPlay.play();
    AudioPlay.onended = () => this.InnerStepperNext(index+1, max);
 
  }

  GenerateTimestamp(index: number = 0, mode: number = 1, label: string = "First Task Start"){
    
    var UUID;

    // Generate UUID
    if(index == 0) UUID = this.FirstPair;
    else if(index != 0 && this.CurrentPairStatus == false){
      this.CurrentPairStatus = true;
      UUID = this.CurrentPair;
    }
    else{
      UUID = uuidv4();
      this.CurrentPairStatus = false;
      this.CurrentPair = UUID;
    }

    // Call API
    // this.http.get<any>('https://api.github.com/users/VDLE/repos').subscribe(data => {
    //   console.log(data);
    // })     
  }

}
