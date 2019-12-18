import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  data;
  newdata;
  allBlogs = [
    {
      _id: "5df3e1855d9ef70007e895ab",
      slug: "Blog-1",
      title: "Blog-1",
      content: "Blog-1 data",
      metafields: [
        { key: "author", type: "text", value: "blog", title: "author" },
        {
          key: "description",
          type: "text",
          value: "blog-1",
          title: "description"
        },
        { key: "blogImage", type: "text", value: "", title: "blogImage" }
      ],
      bucket: "5bab3c41f69d9e4f0a0408ba",
      type_slug: "blogs",
      created: "2019-12-13T19:07:49.369Z",
      created_at: "2019-12-13T19:07:49.369Z",
      modified_at: "2019-12-13T19:07:49.369Z",
      status: "published",
      locale: null,
      published_at: "2019-12-13T19:07:49.369Z",
      metadata: { author: "blog-1", description: "blog-1", blogImage: "" }
    },
    {
      _id: "5df21d971ad9250008bc8a15",
      slug: "blog-2",
      title: "blog-2",
      content: "trhn",
      metafields: [
        { key: "author", type: "text", value: "mittal", title: "author" },
        { key: "description", type: "text", value: "", title: "description" },
        { key: "blogImage", type: "text", value: "", title: "blogImage" }
      ],
      bucket: "5bab3c41f69d9e4f0a0408ba",
      type_slug: "blogs",
      created: "2019-12-12T10:59:35.556Z",
      created_at: "2019-12-12T10:59:35.556Z",
      modified_at: "2019-12-12T10:59:35.556Z",
      status: "published",
      locale: null,
      published_at: "2019-12-12T10:59:35.556Z",
      metadata: { author: "blog", description: "blog-2 data", blogImage: "" }
    },
    {
      _id: "5df21be9d570e60008d33bf9",
      slug: "blog-3",
      title: "blog-3",
      content: "",
      metafields: [
        { key: "author", type: "text", value: "mittal", title: "author" },
        { key: "description", type: "text", value: "", title: "description" },
        { key: "blogImage", type: "text", value: "", title: "blogImage" }
      ],
      bucket: "5bab3c41f69d9e4f0a0408ba",
      type_slug: "blogs",
      created: "2019-12-12T10:52:25.820Z",
      created_at: "2019-12-12T10:52:25.820Z",
      modified_at: "2019-12-12T10:52:25.820Z",
      status: "published",
      locale: null,
      published_at: "2019-12-12T10:52:25.820Z",
      metadata: { author: "blog-3", description: "blog-3 data", blogImage: "" }
    },
    {
      _id: "5ded4286ff944c0008984c01",
      slug: "blog-4",
      title: "blog-4",
      content: "nbfdsbfgvd",
      metafields: [
        { key: "author", type: "text", value: "aa", title: "author" },
        {
          key: "description",
          type: "text",
          value: "ngbfgds",
          title: "description"
        },
        { key: "blogImage", type: "text", value: "nvbcx", title: "blogImage" }
      ],
      bucket: "5bab3c41f69d9e4f0a0408ba",
      type_slug: "blogs",
      created: "2019-12-08T18:35:50.112Z",
      created_at: "2019-12-08T18:35:50.112Z",
      modified_at: "2019-12-08T18:35:50.112Z",
      status: "published",
      locale: null,
      published_at: "2019-12-08T18:35:50.112Z",
      metadata: {
        author: "blog-4",
        description: "blog-4 data",
        blogImage: "nvbcx"
      }
    }
  ];

  allPosts;
  author;
  jdata;
  constructor(private route: Router) {}

  showAllBlogs() {
    if (localStorage.getItem("blog-data") != null) {
      let recData = JSON.parse(localStorage.getItem("blog-data"));
      this.newdata = recData["data"];
    }
  }

  loginCall() {
    this.route.navigate(["login"]);
  }

  ngOnInit() {
    this.showAllBlogs();
  }
}
