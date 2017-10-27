import { Component, OnInit } from '@angular/core';

import { Tag } from '../../models/tag';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'qb-question-search',
  templateUrl: './question-search.component.html',
  styleUrls: ['./question-search.component.scss']
})
export class QuestionSearchComponent implements OnInit {
  tags: Tag[];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getTags()
      .then(tags => this.tags = tags.slice(0, 20));
  }

}