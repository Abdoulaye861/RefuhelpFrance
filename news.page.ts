import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/services/news.service';
import { NewsModel } from './new.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: NewsModel[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
    .subscribe((data) => {
      this.news = data._embedded.news;
      console.log("reponse",this.news);
      (error) => {
        console.log('Erreur !' + error);
      };
    })
  }

}
