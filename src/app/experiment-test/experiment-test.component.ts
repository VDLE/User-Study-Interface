import { Component, Input, Output, EventEmitter, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ControlContainer, NgModelGroup, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

declare var anime: any;

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
      answer: 'A',
      number: 1,
      banner: 'assets/Static/guess.png',
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
      answer: 'B',
      number: 2,
      banner: 'assets/Static/guess.png',
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
    },
    {
      answer: 'B',
      number: 3,
      banner: 'assets/Static/guess.png',
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

  IAPSdata = [
      {
        emotion: "V+A+",
        group:[
          {
            src: '/assets/IAPS/V+A+/1340.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/2158.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A+/2303.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/2311.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/2340.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A+/2344.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/2345.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/2347.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A+/2391.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/8120.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A+/8350.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A+/8496.jpg' 
          }
        ]
      },
      {
        emotion: "V+A-",
        group:[
          {
            src: '/assets/IAPS/V+A-/5000.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5001.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A-/5010.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5020.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5030.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A-/5200.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5201.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5202.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A-/5720.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5750.jpg' 
          },    
          {
            src: '/assets/IAPS/V+A-/5760.jpg' 
          }, 
          {
            src: '/assets/IAPS/V+A-/5779.jpg' 
          }
        ]
      },
      {
        emotion: "V-A+",
        group:[
          {
            src: '/assets/IAPS/V-A+/1030.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1033.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A+/1080.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1090.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1110.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A+/1113.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1200.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1201.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A+/1202.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1220.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A+/1271.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A+/1274.jpg' 
          }
        ]
      },
      {
        emotion: "V-A-",
        group:[
          {
            src: '/assets/IAPS/V-A-/2141.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/2205.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A-/2276.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/2301.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/2312.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A-/2456.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/2457.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/2700.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A-/2900.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/3300.jpg' 
          },    
          {
            src: '/assets/IAPS/V-A-/9190.jpg' 
          }, 
          {
            src: '/assets/IAPS/V-A-/9220.jpg' 
          }
        ]
      }    

  ]
  
  // Payload = [
  //   {
  //     group:[
  //       {
  //         src: '/assets/Audio/file1.wav' 
  //       }, 
  //       {
  //         src: '/assets/Audio/file12.wav' 
  //       },    
  //       {
  //         src: '/assets/Audio/file18.wav' 
  //       }, 
  //       {
  //         src: '/assets/Audio/file29.wav' 
  //       }
  //     ]
  //   },
  //   {
  //     group:[ 
  //       {
  //         src: '/assets/Audio/file2.wav' 
  //       },    
  //       {
  //         src: '/assets/Audio/file41.wav' 
  //       },
  //       {
  //         src: '/assets/Audio/file29.wav' 
  //       },
  //       {
  //         src: '/assets/Audio/file46.wav' 
  //       }
  //     ]
  //   },
  //   {
  //     group:[
  //       {
  //         src: '/assets/Audio/file3.wav' 
  //       },    
  //       {
  //         src: '/assets/Audio/file25.wav' 
  //       }, 
  //       {
  //         src: '/assets/Audio/file33.wav' 
  //       }
  //     ]
  //   },
  //   {
  //     group:[, 
  //       {
  //         src: '/assets/Audio/file4.wav' 
  //       },    
  //       {
  //         src: '/assets/Audio/file24.wav' 
  //       },
  //       {
  //         src: '/assets/Audio/file38.wav' 
  //       }
  //     ]
  //   },
  //   {
  //     group:[
  //       {
  //         src: '/assets/Audio/file5.wav' 
  //       },    
  //       {
  //         src: '/assets/Audio/file32.wav' 
  //       }
  //     ]
  //   } 

  // ]

  Payload = [
    {
      group:[
        {
          src: '/assets/Color-Label/1b.png' 
        },
        {
          src: '/assets/Color-Label/1g.png' 
        },
        {
          src: '/assets/Color-Label/1r.png'  
        },
        {
          src: '/assets/Color-Label/1w.png' 
        },
        {
          src: '/assets/Color-Label/1y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/2b.png' 
        },
        {
          src: '/assets/Color-Label/2g.png' 
        },
        {
          src: '/assets/Color-Label/2r.png'  
        },
        {
          src: '/assets/Color-Label/2w.png' 
        },
        {
          src: '/assets/Color-Label/2y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/3b.png' 
        },
        {
          src: '/assets/Color-Label/3g.png' 
        },
        {
          src: '/assets/Color-Label/3r.png'  
        },
        {
          src: '/assets/Color-Label/3w.png' 
        },
        {
          src: '/assets/Color-Label/3y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/4b.png' 
        },
        {
          src: '/assets/Color-Label/4g.png' 
        },
        {
          src: '/assets/Color-Label/4r.png'  
        },
        {
          src: '/assets/Color-Label/4w.png' 
        },
        {
          src: '/assets/Color-Label/4y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/5b.png' 
        },
        {
          src: '/assets/Color-Label/5g.png' 
        },
        {
          src: '/assets/Color-Label/5r.png'  
        },
        {
          src: '/assets/Color-Label/5w.png' 
        },
        {
          src: '/assets/Color-Label/5y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/6b.png' 
        },
        {
          src: '/assets/Color-Label/6g.png' 
        },
        {
          src: '/assets/Color-Label/6r.png'  
        },
        {
          src: '/assets/Color-Label/6w.png' 
        },
        {
          src: '/assets/Color-Label/6y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/7b.png' 
        },
        {
          src: '/assets/Color-Label/7g.png' 
        },
        {
          src: '/assets/Color-Label/7r.png'  
        },
        {
          src: '/assets/Color-Label/7w.png' 
        },
        {
          src: '/assets/Color-Label/7y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/8b.png' 
        },
        {
          src: '/assets/Color-Label/8g.png' 
        },
        {
          src: '/assets/Color-Label/8r.png'  
        },
        {
          src: '/assets/Color-Label/8w.png' 
        },
        {
          src: '/assets/Color-Label/8y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/9b.png' 
        },
        {
          src: '/assets/Color-Label/9g.png' 
        },
        {
          src: '/assets/Color-Label/9r.png'  
        },
        {
          src: '/assets/Color-Label/9w.png' 
        },
        {
          src: '/assets/Color-Label/9y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/10b.png' 
        },
        {
          src: '/assets/Color-Label/10g.png' 
        },
        {
          src: '/assets/Color-Label/10r.png'  
        },
        {
          src: '/assets/Color-Label/10w.png' 
        },
        {
          src: '/assets/Color-Label/10y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/11b.png' 
        },
        {
          src: '/assets/Color-Label/11g.png' 
        },
        {
          src: '/assets/Color-Label/11r.png'  
        },
        {
          src: '/assets/Color-Label/11w.png' 
        },
        {
          src: '/assets/Color-Label/11y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/12b.png' 
        },
        {
          src: '/assets/Color-Label/12g.png' 
        },
        {
          src: '/assets/Color-Label/12r.png'  
        },
        {
          src: '/assets/Color-Label/12w.png' 
        },
        {
          src: '/assets/Color-Label/12y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/13b.png' 
        },
        {
          src: '/assets/Color-Label/13g.png' 
        },
        {
          src: '/assets/Color-Label/13r.png'  
        },
        {
          src: '/assets/Color-Label/13w.png' 
        },
        {
          src: '/assets/Color-Label/13y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/14b.png' 
        },
        {
          src: '/assets/Color-Label/14g.png' 
        },
        {
          src: '/assets/Color-Label/14r.png'  
        },
        {
          src: '/assets/Color-Label/14w.png' 
        },
        {
          src: '/assets/Color-Label/14y.png'  
        }
      ]
    },
    {
      group:[
        {
          src: '/assets/Color-Label/15b.png' 
        },
        {
          src: '/assets/Color-Label/15g.png' 
        },
        {
          src: '/assets/Color-Label/15r.png'  
        },
        {
          src: '/assets/Color-Label/15w.png' 
        },
        {
          src: '/assets/Color-Label/15y.png'  
        }
      ]
    }
  ]

  LoadingImage = "/assets/Static/listen.png"
  GuessImage = 'assets/Static/guess.png'

  NextSwitch: boolean = false;

  questionIndex = 0;
  activeIndex = 0;
  currentVideo = this.Questions[this.questionIndex].content[this.activeIndex];
  data: any;
    

  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    
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
    
  }

  Loop(){
  // Wrap every letter in a span
  let textWrapper = document.querySelector('.c2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.c2 .letter .loop-infinity',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.c2 .letter',
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
  }

  @ViewChild('InnerStepper') private Stepper: MatStepper;
 

  timeLeft: number = 30;
  interval: any;

  // checkRadioValid(){
  //   if(this.RadioGroup._checkSelectedRadioButton == undefined) return false;
  //   else return true;
  // }

  startTimer(mode: number = 1, timeSet: number = 30, maxSet: number = 30) {
    this.timeLeft = timeSet;
    this.max = maxSet;
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
          this.SetEvent('Wait-Period-End');
        }
        else if(mode == 2){
          this.SetEvent('Eyes-Open-End');
        }
        else if(mode == 3){
          this.SetEvent('Eyes-Closed-End');
        }
        else if(mode == 5){
          this.SetEvent('Grey-Screen-End');
        }
        this.timeLeft = timeSet;
        this.current = 0;
        clearInterval(this.interval);
        this.Stepper.next();
      }
    },1000)
  }

  InnerStepperNext(group: string, task: string, time: number = 10000){
    setTimeout(() => 
    {
      
      // End Current Task
      this.SetEvent(group + '-' + task + '-End'); 

      // Shift Stepper
      this.Stepper.next();
    },
    time);
  }



  StartExperiment(){
    this.http.get<any>('http://127.0.0.1:5000/addevent/First-Task-Start').subscribe(data => {
      console.log(data);
    })   
  }
  SetEvent(label: string){
    this.http.get<any>('http://127.0.0.1:5000/addevent/' + label).subscribe(data => {
      console.log(data);
    })   
  }

  
  playMusic(source: string, group: number, task: number){
    var AudioPlay = new Audio();
    AudioPlay.src = source;
    AudioPlay.load();
    AudioPlay.play();
    AudioPlay.onended = () => this.InnerStepperNext((group+1).toString(),(task+1).toString());
 
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
