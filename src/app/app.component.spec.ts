/* tslint:disable:no-unused-variable */
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, async } from '@angular/core/testing';

import { DataTableModule } from 'angular2-datatable';

import { AppComponent } from './app.component';
import { PostService } from './shared/post.service';
import { postList } from './shared/mock-post-list';

describe('AppComponent', () => {

  let postService;

  beforeEach(() => {
    postService = jasmine.createSpyObj('postService', ['getAllPosts']);
    postService.getAllPosts.and.returnValue({ subscribe: callback => callback(postList) });

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        DataTableModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
          {
              provide: PostService,
              useValue: postService
          },
          {
              provide: Http,
              useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                  return new Http(backendInstance, defaultOptions);
              },
              deps: [MockBackend, BaseRequestOptions]
          }
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Displaying all posts!!!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Displaying all posts!!!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Displaying all posts!!!');
  }));

  it('List of post should be equal to total posts', function() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table tbody').childElementCount).toBe(postList.length);
  });

  it('List of post should be equal to count provided', function() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.rowsOnPage = 3;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table tbody').childElementCount).toBe(fixture.componentInstance.rowsOnPage);
  });

});
