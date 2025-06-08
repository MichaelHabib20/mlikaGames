import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../models/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private initialGames: Game[] = [
    {
      id: 1,
      title: 'زحليقة المهرج المرحة',
      description: 'لعبة زحليقة هوائية ممتعة بتصميم مهرج ملون، تجذب الأطفال بألوانها الزاهية وتضفي أجواء من المرح والضحك في كل مناسبة.',
      price: 2300,
      churchPrice: 1150,
      images: [
        'assets/images/clown.jpg',
        'assets/images/clown-2.jpg',
        'assets/images/clown-3.jpg',
        'assets/images/clown-4.jpg',
        'assets/images/clown-5.jpg'
      ],
      category: 'مغامرات',
      rating: 4.5,
      area: '5.5 * 8 ',
      height: 6
    },
    {
      id: 2,
      title: 'زحليقة الأدغال الاستوائية',
      description: 'قاتل عبر المجرة في هذه اللعبة المليئة بالإثارة والحركة زحليقة بتصميم مستوحى من غابات الأدغال المليئة بالحيوانات والنباتات، تمنح الأطفال شعورًا بالمغامرة والاستكشاف في كل مرة يستخدمونها.',
      price: 2200,
      churchPrice: 1100,
      images: [
        'assets/images/l3ba nosin.jpg'
      ],
      category: 'أكشن',
      rating: 4.8,
      area: '16 * 4 ',
      height: 5
    },
    {
      id: 3,
      title: 'زحليقة المينيونز المدهشة',
      description: 'زحليقة بتصميم شخصيات المينيونز المحبوبة، تضيف جوًا من المتعة والضحك، مثالية لحفلات الأطفال والمناسبات الترفيهية.',
      price: 2300,
      churchPrice: 1150,
      images: [
        'assets/images/minions.jpg',
        'assets/images/mininos-2.jpg',
        'assets/images/minions-3.jpg'
      ],
      category: 'ألغاز',
      rating: 4.2,
      area: '5 * 8 ',
      height: 5.5
    },
    {
      id: 4,
      title: 'زحليقة الديناصور  ',
      description: 'انطلق في رحلة عبر العصور مع زحليقة الديناصور المدهشة! تصميمها المستوحى من عالم الديناصورات يجذب أنظار الأطفال ويوفر تجربة مليئة بالحماس والمغامرة.',
      price: 1500,
      churchPrice: 750,
      images: [
        'assets/images/mov.jpg',
        'assets/images/mov-2.jpg',
        'assets/images/mov-3.jpg',
        'assets/images/mov-4.jpg',
      ],
      category: 'ألغاز',
      rating: 4.2,
      area: '8 * 3 ',
      height: 4
    },
    {
      id: 5,
      title: 'زحليقة ثلاثية المسارات',
      description: 'لعبة ضخمة تحتوي على ثلاث مسارات للزحلقة، تتيح للأطفال التنافس مع أصدقائهم في نفس الوقت، مثالية للمهرجانات والمناسبات الكبرى.',
      price: 2200,
      churchPrice: 1100,
      images: [
        'assets/images/slsia adima.jpg'
      ],
      category: 'ألغاز',
      rating: 4.2,
      area: '10.5 * 5 ',
      height: 6.5
    },
    {
      id: 6,
      title: 'زحليقة توم وجيري المغامرة',
      description: 'استمتع بمغامرات توم وجيري مع هذه الزحليقة الهوائية المستوحاة من الشخصيات الكرتونية الشهيرة، مثالية للأطفال الذين يحبون الحركة والمرح.',
      price: 2500,
      churchPrice: 1250,
      images: [
        'assets/images/slsia gdida.jpg',
        'assets/images/slsia gdida-1.jpg',
        'assets/images/slsia gdida-3.jpg',
        'assets/images/slsia gdida-4.jpg',
      ],
      category: 'ألغاز',
      rating: 4.2,
      area: '10 * 6 ',
      height: 8
    },
    {
      id: 7,
      title: 'زحليقة القوس العملاقة ',
      description: 'استمتع بأقصى درجات التحدي والمرح مع زحليقة القوس العملاقة! تحتوي على عدة مسارات بألوان نابضة بالحياة تسمح لأكثر من طفل باللعب في نفس الوقت، مما يجعلها مثالية للمهرجانات، والنوادي، والفعاليات الكبرى. تصميمها الجذّاب يجعلها محط أنظار الجميع ويوفر تجربة فريدة وآمنة للأطفال.',
      price: 2200,
      churchPrice: 1100,
      images: [
        'assets/images/slsia nady.jpg'
      ],
      category: 'ألغاز',
      rating: 4.2,
      area: '7 * 6 ',
      height: 6
    },
    {
      id: 8,
      title: 'الترمبولين الطائرة',
      description: 'اقفز عاليًا واستمتع بالمرح مع الترمبولين الآمن والممتع للأطفال من جميع الأعمار. مثالي للأنشطة الخارجية وحفلات أعياد الميلاد والمناسبات العائلية.',
      price: 1000,
      churchPrice: 500,
      images: [
        'assets/images/trampolin.jpg',
        'assets/images/trampolin.jpg'
      ],
      category: 'ألغاز',
      rating: 4.2
    },
  ];

  private gamesSubject = new BehaviorSubject<Game[]>(this.initialGames);
  public games$ = this.gamesSubject.asObservable();

  constructor() { }

  getGameById(id: number): Observable<Game | undefined> {
    return new Observable(observer => {
      const game = this.initialGames.find(g => g.id === id);
      observer.next(game);
      observer.complete();
    });
  }
} 