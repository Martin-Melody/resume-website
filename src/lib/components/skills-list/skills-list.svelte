<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<div class="mb-5">
  <p class="text-foreground font-semibold mb-2 text-sm md:text-base">
    Technical Skills
  </p>

  <!-- Mobile Carousel -->
  <div class="block lg:hidden">
    <Carousel.Root
      opts={{
        align: "start",
        loop: false,
      }}
    >
      <Carousel.Content class="-ml-2">
        <Carousel.Item class="pl-2 basis-4/5 flex">
          <div class="p-3 border rounded-lg w-full flex flex-col">
            <p class="font-medium text-xs text-foreground mb-2">Languages</p>
            <ul
              class="list-disc pl-4 text-muted-foreground text-xs space-y-1 flex-1"
            >
              <li>TypeScript</li>
              <li>C#</li>
              <li>SQL</li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item class="pl-2 basis-4/5 flex">
          <div class="p-3 border rounded-lg w-full flex flex-col">
            <p class="font-medium text-xs text-foreground mb-2">Frontend</p>
            <ul
              class="list-disc pl-4 text-muted-foreground text-xs space-y-1 flex-1"
            >
              <li>Angular</li>
              <li>Ionic</li>
              <li>SvelteKit</li>
              <li>React Native</li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item class="pl-2 basis-4/5 flex">
          <div class="p-3 border rounded-lg w-full flex flex-col">
            <p class="font-medium text-xs text-foreground mb-2">Backend</p>
            <ul
              class="list-disc pl-4 text-muted-foreground text-xs space-y-1 flex-1"
            >
              <li>.NET Web API</li>
              <li>Entity Framework Core</li>
              <li>Express</li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item class="pl-2 basis-4/5 flex">
          <div class="p-3 border rounded-lg w-full flex flex-col">
            <p class="font-medium text-xs text-foreground mb-2">Databases</p>
            <ul
              class="list-disc pl-4 text-muted-foreground text-xs space-y-1 flex-1"
            >
              <li>SQLite</li>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
              <li>Cosmos DB</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item class="pl-2 basis-4/5 flex">
          <div class="p-3 border rounded-lg w-full flex flex-col">
            <p class="font-medium text-xs text-foreground mb-2">
              Cloud & DevOps
            </p>
            <ul
              class="list-disc pl-4 text-muted-foreground text-xs space-y-1 flex-1"
            >
              <li>Azure VMs / Blob Storage</li>
              <li>CI/CD (Azure DevOps)</li>
              <li>Git & GitHub</li>
              <li>PowerShell scripting</li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel.Content>
      <Carousel.Previous class="hidden sm:flex" />
      <Carousel.Next class="hidden sm:flex" />
    </Carousel.Root>
  </div>
  <!-- Desktop Grid (unchanged) -->
  <div class="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
    <div>
      <p class="font-medium text-sm text-foreground mb-1">Languages</p>
      <ul class="list-disc pl-5 text-muted-foreground text-sm">
        <li>TypeScript</li>
        <li>C#</li>
        <li>SQL</li>
      </ul>
    </div>
    <div>
      <p class="font-medium text-sm text-foreground mb-1">Frontend</p>
      <ul class="list-disc pl-5 text-muted-foreground text-sm">
        <li>Angular</li>
        <li>Ionic</li>
        <li>SvelteKit</li>
        <li>React Native</li>
      </ul>
    </div>
    <div>
      <p class="font-medium text-sm text-foreground mb-1">Backend</p>
      <ul class="list-disc pl-5 text-muted-foreground text-sm">
        <li>.NET Web API</li>
        <li>Entity Framework Core</li>
        <li>Express</li>
      </ul>
    </div>
    <div>
      <p class="font-medium text-sm text-foreground mb-1">Databases</p>
      <ul class="list-disc pl-5 text-muted-foreground text-sm">
        <li>SQLite</li>
        <li>PostgreSQL</li>
        <li>SQL Server</li>
        <li>Cosmos DB</li>
        <li>MongoDB</li>
      </ul>
    </div>
    <div>
      <p class="font-medium text-sm text-foreground mb-1">Cloud & DevOps</p>
      <ul class="list-disc pl-5 text-muted-foreground text-sm">
        <li>Azure VMs / Blob Storage</li>
        <li>CI/CD (Azure DevOps)</li>
        <li>Git & GitHub</li>
        <li>PowerShell scripting</li>
      </ul>
    </div>
  </div>
</div>
